let gridContainer = document.querySelector(".container");
let askBtn = document.querySelector(".ask-btn");
let squares, userInput;

let GRID_SIZE = 256;

askBtn.addEventListener("click", function () {
	gridContainer.innerHTML = "";
	userInput = window.prompt("What grid size do you want?");
	// console.log(userInput);

	for (let boxCount = 1; boxCount <= userInput * userInput; boxCount++) {
		let el = document.createElement("div");
		el.classList.add("flex-item");
		el.style.flex = `0 0 calc(100% / ${userInput})`;
		el.style.height = `calc(100% / ${userInput})`;

		gridContainer.appendChild(el);

		squares = document.querySelectorAll(".flex-item");

		squares.forEach((square) => {
			square.addEventListener("mouseenter", function () {
				square.classList.add("flex-item--colored");
			});
		});
	}
});
