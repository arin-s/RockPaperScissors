"use strict";

function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0: return "Scissors";
        case 1: return "Paper";
        case 2: return "Rock";
    }
}

const winStates = new Map();
winStates.set("scissors", "paper");
winStates.set("paper", "rock");
winStates.set("rock", "scissors");

const validInput = ["scissors", "paper", "rock", "quit"];

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (!validInput.includes(playerSelection)) {
        return "invalid";
    }
    if (playerSelection === computerSelection) {
        console.log(`\tTie! You both picked ${playerSelection}`);
        return "tie";
    }
    if (winStates.get(playerSelection) === computerSelection) {
        console.log(`\tWin! ${playerSelection} beats ${computerSelection}`);
        return "win";
    }
    if (playerSelection === "quit") {
        return "quit";
    }
    console.log(`\tLoss! ${computerSelection} beats ${playerSelection}`);
    return "loss";
}

function playGame() {
    let score = 0;
    console.log("Let the game begin!")
    for (let i = 0; i < 5; i++) {
        let input = prompt("What is your move?");
        let result = playRound(input, getComputerChoice());
        if (result === "quit") {
            break;
        }
        switch (result) {
            case "invalid":
                console.log("Invalid move, try again.");
            case "tie":
                i--;
                continue;
            case "win":
                score++;
                continue;
            case "loss":
                score--;
                continue;
        }
    }
    if (score > 0) {
        console.log("You won the game!")
    } else {
        console.log("You lost the game!");
    }
}

playGame();