let displayScreen = document.querySelector(".display");
let firstNumber, secondNumber, operator;

function operate(firstNumber, secondNumber, operator) {
	switch (operator) {
		case "+":
			add(firstNumber, secondNumber);
			break;
		case "-":
			subtract(firstNumber, secondNumber);
			break;
		case "x":
			multiply(firstNumber, secondNumber);
			break;
		case "/":
			divide(firstNumber, secondNumber);
	}
}

function add(a, b) {
	console.log(a + b);
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return a / b;
}

function displayNumber() {
	let number;
}

displayNumber();
