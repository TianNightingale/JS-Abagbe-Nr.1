//       Short Circuit Evaluation (&&), Ternary Operator (?:)
//Q1. What does this function do?
function render(isOpen) {
    return isOpen ? `<p>Open</p>` : `<p>Close</p>`;
}
// if ifOpen is true, return <p>Open</p>, otherwise "<p>Close</p>"


//Q2. What does this function do?
function render(isOpen) {
    return `<footer>${isOpen && `<p>Open</p>`}</footer>`;
}
// if isOpen true, return <p>Open</p>, otherwise <footer>false</footer>


//Q3. In what scenarios is the && operator useful?
// if left of && is false, break, return false     if left of && is true, then execute the right part
const showMessage = isLoggedIn && 'Welcome back!';



//Q4. In what scenarios is the ?: operator useful?                 it reduce the usage of if
const message = isLoggedIn ? 'Welcome back!' : 'Please log in';


//E1. Write a function displayCart that takes a cart object { items: Array } and returns a footer displaying the total amount if there are items in the cart, 
//otherwise "Your cart is empty."

function displayCart(cart) {
    const totalAmount = cart.items.length > 0 ? `Total items: ${cart.items.length}` : 'Your cart is empty.';
    return `<footer>${totalAmount}</footer>`;
}

