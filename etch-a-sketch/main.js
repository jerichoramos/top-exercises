let gridContainer = document.querySelector(".container");
let squares;

const GRID_SIZE = 256;

for (let boxCount = 1; boxCount <= GRID_SIZE; boxCount++) {
	let el = document.createElement("div");
	el.classList.add("flex-item");

	gridContainer.appendChild(el);

	squares = document.querySelectorAll(".flex-item");
}

squares.forEach((square) => {
	square.addEventListener("mouseenter", function () {
		square.classList.add("flex-item--colored");
	});
});
