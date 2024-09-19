//----------------------------------------Fetch API------------

// Q1. What is the Fetch API trying to solve?
// The Fetch API provides a modern, flexible, and powerful way to make network requests in JavaScript, replacing older methods like XMLHttpRequest.

// Q2. Why does the Fetch API use promises?
// The Fetch API uses promises to handle asynchronous operations, allowing more readable and maintainable code compared to callback-based approaches.

// E1. Write a function getTodos that makes an HTTP GET request to https://jsonplaceholder.typicode.com/todos and writes the result to the console. Consider error handling.
function getTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => console.log(data))
        .catch(error => console.error('There was a problem with the fetch operation:', error));
}
getTodos();

// E2. Write a function getTodos that makes an HTTP GET request to https://jsonplaceholder.typicode.com/todos and writes the result to a list of DOM nodes. Consider error handling.
function getTodosToList() {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            const list = document.createElement('ul');
            data.forEach(todo => {
                const listItem = document.createElement('li');
                listItem.textContent = `${todo.id}: ${todo.title}`;
                list.appendChild(listItem);
            });
            document.body.appendChild(list);
        })
        .catch(error => console.error('There was a problem with the fetch operation:', error));
}
getTodosToList();

// E4/BONUS. Write a function postTodo that makes an HTTP POST request to https://jsonplaceholder.typicode.com/todos with a body and writes the result to the console. Consider error handling.
function postTodo() {
    const todo = {
        userId: 1,
        title: 'New Todo',
        completed: false
    };
    fetch('https://jsonplaceholder.typicode.com/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(todo)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.error('There was a problem with the fetch operation:', error));
}
postTodo();

// E3/BONUS. Write above functions using async/await with try/catch.
async function getTodos() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}
getTodos();

async function getTodosToList() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const list = document.createElement('ul');
        data.forEach(todo => {
            const listItem = document.createElement('li');
            listItem.textContent = `${todo.id}: ${todo.title}`;
            list.appendChild(listItem);
        });
        document.body.appendChild(list);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}
getTodosToList();

async function postTodo() {
    const todo = {
        userId: 1,
        title: 'New Todo',
        completed: false
    };
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(todo)
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
    }
}
postTodo();
