let displayScreen = document.querySelector(".display");
let calcBtns = document.querySelectorAll(".calc-btn");
let opBtns = document.querySelectorAll(".op-btn");
let equalBtn = document.querySelector(".num-btn--equal");
let clrBtn = document.querySelector(".clr-btn");

let firstNumber = "",
	secondNumber = "",
	operator = "",
	result = "";

function operate(num1, num2, op) {
	num1 = parseInt(num1);
	num2 = parseInt(num2);

	switch (op) {
		case "+":
			return add(num1, num2);
		case "-":
			return subtract(num1, num2);
		case "x":
			return multiply(num1, num2);
		case "/":
			return divide(num1, num2);
		default:
			return null;
	}
}

function add(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a * b;
}

function divide(a, b) {
	return b === 0 ? "Error" : a / b; // Prevent division by zero
}

calcBtns.forEach((calcBtn) => {
	calcBtn.addEventListener("click", () => {
		if (calcBtn.classList.contains("num-btn")) {
			if (result && secondNumber) {
				resetCalculator();
				// console.log("hello");
				// console.log(firstNumber, secondNumber, operator, result);
			}

			if (!operator) {
				firstNumber += calcBtn.innerText;
				displayScreen.innerText = `${firstNumber} ${operator} ${secondNumber}`;
				console.log(firstNumber, secondNumber, operator);
			} else {
				secondNumber += calcBtn.innerText;
				displayScreen.innerText = `${firstNumber} ${operator} ${secondNumber}`;
				console.log(firstNumber, secondNumber, operator);
			}
		} else if (calcBtn.classList.contains("op-btn")) {
			if (result) {
				operator = "";
				secondNumber = "";
				firstNumber = result.toString();
			}
			operator = calcBtn.innerText;
			console.log(firstNumber, secondNumber, operator);
		} else if (calcBtn.classList.contains("num-btn--equal")) {
			if (firstNumber && secondNumber && operator) {
				console.log(firstNumber, secondNumber, operator);
				result = operate(firstNumber, secondNumber, operator);
				displayResult(result);
				// resetCalculator();
			}
		}
	});
});

function displayResult(value) {
	displayScreen.innerText =
		value ?? `${firstNumber} ${operator} ${secondNumber}`;
	// console.log(value);
	// console.log(displayScreen);
}

clrBtn.addEventListener("click", () => {
	resetCalculator();
});

function resetCalculator() {
	operator = "";
	secondNumber = "";
	firstNumber = "";
	result = "";
}
