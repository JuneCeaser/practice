function add() {
    // Get the values from the input fields
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;

    // Convert the input values to numbers
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    // Check if inputs are valid numbers
    if (isNaN(number1) || isNaN(number2)) {
        document.getElementById("result").textContent = "Please enter valid numbers.";
        return;
    }

    // Perform the addition
    const sum = number1 + number2;


    // Display the result
    document.getElementById("result").textContent = `The sum is: ${sum}`;
}

function sub() {
    // Get the values from the input fields
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;

    // Convert the input values to numbers
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    // Check if inputs are valid numbers
    if (isNaN(number1) || isNaN(number2)) {
        document.getElementById("result").textContent = "Please enter valid numbers.";
        return;
    }

    // Perform the subtraction
    const difference = number1 - number2;

    // Display the result
    document.getElementById("result").textContent = `The def is: ${difference}`;
}

function mul() {
    // Get the values from the input fields
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;

    // Convert the input values to numbers
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    // Check if inputs are valid numbers
    if (isNaN(number1) || isNaN(number2)) {
        document.getElementById("result").textContent = "Please enter valid numbers.";
        return;
    }

    // Perform the multiplication
    const product = number1 * number2;

    // Display the result
    document.getElementById("result").textContent = `The product is: ${product}`;
}

function div() {
    // Get the values from the input fields
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;

    // Convert the input values to numbers
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);

    // Check if inputs are valid numbers
    if (isNaN(number1) || isNaN(number2)) {
        document.getElementById("result").textContent = "Please enter valid numbers.";
        return;
    }

    // Check if the second number is zero
    if (number2 === 0) {
        document.getElementById("result").textContent = "Cannot divide by zero.";
        return;
    }

    // Perform the division
    const quotient = number1 / number2;

    // Display the result
    document.getElementById("result").textContent = `The quotient is: ${quotient}`;
}






/* function getInputValues() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").textContent = "Please enter valid numbers.";
        return null;
    }
    return { num1, num2 };
}

function add() {
    const inputs = getInputValues();
    if (!inputs) return;
    const { num1, num2 } = inputs;
    document.getElementById("result").textContent = `Result: ${num1 + num2}`;
}

function sub() {
    const inputs = getInputValues();
    if (!inputs) return;
    const { num1, num2 } = inputs;
    document.getElementById("result").textContent = `Result: ${num1 - num2}`;
}

function mul() {
    const inputs = getInputValues();
    if (!inputs) return;
    const { num1, num2 } = inputs;
    document.getElementById("result").textContent = `Result: ${num1 * num2}`;
}

function div() {
    const inputs = getInputValues();
    if (!inputs) return;
    const { num1, num2 } = inputs;
    if (num2 === 0) {
        document.getElementById("result").textContent = "Division by zero is not allowed.";
        return;
    }
    document.getElementById("result").textContent = `Result: ${num1 / num2}`;
}
 */



