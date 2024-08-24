let choices = ["rock", "paper", "scissors"];
const choiceBtns = document.querySelectorAll(".btn");

let playerHand,
	compHand,
	humanScore = 0,
	computerScore = 0;

function getComputerHand() {
	let choice = choices[Math.floor(Math.random() * choices.length)];
	compHand = choice;
}

function getPlayerHand(hand) {
	playerHand = hand.innerText.toLowerCase();
}

choiceBtns.forEach((choiceBtn) => {
	choiceBtn.addEventListener("click", function () {
		// getComputerHand();
		// getPlayerHand(choiceBtn);
		playRound(choiceBtn);
	});
});

function playRound(c) {
	getComputerHand();
	getPlayerHand(c);

	console.log(playerHand);
	console.log(compHand);

	if (playerHand === "rock" && compHand === "scissors") {
		console.log(`You win! ${playerHand} beats ${compHand}!`);
		humanScore++;
	} else if (playerHand === "rock" && compHand === "paper") {
		console.log(`You lose! ${compHand} beats ${playerHand}!`);
		computerScore++;
	} else if (playerHand === "scissors" && compHand === "paper") {
		console.log(`You win! ${playerHand} beats ${compHand}!`);
		humanScore++;
	} else if (playerHand === "scissors" && compHand === "rock") {
		console.log(`You lose! ${compHand} beats ${playerHand}!`);
		computerScore++;
	} else if (playerHand === "paper" && compHand === "rock") {
		console.log(`You win! ${playerHand} beats ${compHand}!`);
		humanScore++;
	} else if (playerHand === "paper" && compHand === "scissors") {
		console.log(`You lose! ${compHand} beats ${playerHand}!`);
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
