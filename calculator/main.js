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
			add(num1, num2);
			break;
		case "-":
			subtract(num1, num2);
			break;
		case "x":
			multiply(num1, num2);
			break;
		case "/":
			divide(num1, num2);
	}
}

function add(a, b) {
	result = a + b;
	operator = "";
	secondNumber = "";
	firstNumber = result;
	console.log(result);
}

function subtract(a, b) {
	result = a - b;
	operator = "";
	secondNumber = "";
	firstNumber = result;
	console.log(result);
}

function multiply(a, b) {
	result = a * b;
	operator = "";
	secondNumber = "";
	firstNumber = result;
	console.log(result);
}

function divide(a, b) {
	result = a / b;
	operator = "";
	secondNumber = "";
	firstNumber = result;
	console.log(result);
}

calcBtns.forEach((calcBtn) => {
	calcBtn.addEventListener("click", () => {
		if (calcBtn.className.includes("op-btn")) {
			operator = calcBtn.innerText;
		} else if (calcBtn.className.includes("num-btn--equal")) {
			console.log("clicked");
			operate(firstNumber, secondNumber, operator);
		} else {
			if (!operator) {
				firstNumber += calcBtn.innerText;
			} else {
				secondNumber += calcBtn.innerText;
			}
		}
		displayResult();
	});
});

function displayResult() {
	displayScreen.innerText = `${firstNumber} ${operator} ${secondNumber}`;
}

function resetCalculator() {
	clrBtn.addEventListener("click", () => {
		operator = "";
		secondNumber = "";
		firstNumber = "";
		displayScreen.innerText = "";
	});
}
