// Basic JavaScript Script

// Log a message to the console
console.log("Hello, World!");

// Function to add two numbers
function addNumbers(a, b) {
    return a + b;
}

// Example usage
let num1 = 5;
let num2 = 10;
console.log("The sum is:", addNumbers(num1, num2));

// Event listener for button click
document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("myButton");
    if (button) {
        button.addEventListener("click", () => {
            alert("Button clicked!");
        });
    }
});