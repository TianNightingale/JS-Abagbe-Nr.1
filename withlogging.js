const cache = {};

const history = [];

function add(a, b) {
    return a + b;
}

function withLogging(fn) {
    return function(a, b) {
        // Check the cache
        if (cache[a] && cache[a][b]) { //if we have both keys in cache
            console.log(`Fetching from cache: ${a},${b} => ${cache[a][b]}`);
            history.push({ args: [a, b], result: cache[a][b], fromCache: true });
            return cache[a][b];
        }

           // new counting
        const result = fn(a, b);
      
        if (!cache[a]) cache[a] = {}; 
        cache[a][b] = result;

        history.push({ args: [a, b], result, fromCache: false });
        console.log(`Computed result: ${result}`);
        return result;
    };
}

function withCatch(fn) {
    return function(a, b) {
        try {
            return fn(a, b);
        } catch (error) {
            console.log("Error occurred:", error);
        }
    };
}


const test = withCatch(withLogging(add));

console.log(test(1, 2)); 
console.log(test(3, 5)); 
console.log(test(1, 2)); // from catch
console.log(test(7, 8)); 
console.log(test(3, 5)); // from catch

console.log(history);
