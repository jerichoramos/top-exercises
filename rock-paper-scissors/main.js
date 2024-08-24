// console.log("Hello");

const playBtn = document.querySelector(".btn");

let choices = ["rock", "paper", "scissors"];
let humanScore = 0,
	computerScore = 0,
	humanChoice,
	computerChoice;

playBtn.addEventListener("click", function () {
	playRound(humanChoice, computerChoice);
});

function getComputerChoice() {
	let choice = choices[Math.floor(Math.random() * choices.length)];
	computerChoice = choice;
}

function getHumanChoice() {
	let choice = prompt("What will you play?");
	choice = choice.toLowerCase();
	humanChoice = choice;
}

function playRound(a, b) {
	getComputerChoice();
	getHumanChoice();

	console.log(humanChoice);
	console.log(computerChoice);

	if (humanChoice === "rock" && computerChoice === "scissors") {
		console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
		humanScore++;
	} else if (humanChoice === "rock" && computerChoice === "paper") {
		console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
		computerScore++;
	} else if (humanChoice === "scissors" && computerChoice === "paper") {
		console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
		humanScore++;
	} else if (humanChoice === "scissors" && computerChoice === "rock") {
		console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
		computerScore++;
	} else if (humanChoice === "paper" && computerChoice === "rock") {
		console.log(`You win! ${humanChoice} beats ${computerChoice}!`);
		humanScore++;
	} else if (humanChoice === "paper" && computerChoice === "scissors") {
		console.log(`You lose! ${computerChoice} beats ${humanChoice}!`);
		computerScore++;
	} else console.log("It's a tie!");
	console.log(humanScore, computerScore);

	if (humanScore === 5) {
		console.log("Humans win!");
		playBtn.disabled = true;
	} else if (computerScore === 5) {
		console.log("AI wins");
		playBtn.disabled = true;
	}
}
