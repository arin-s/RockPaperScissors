"use strict";



const winStates = new Map();
winStates.set("scissors", "paper");
winStates.set("paper", "rock");
winStates.set("rock", "scissors");

let log;
let score = 0;
let turn = 1;

function playRound(playerSelection) {
    if (turn <= 5) {
        let computerSelection = getComputerChoice();
        //Check for ties
        if (playerSelection === computerSelection) {
            log = `\tTie! You both picked ${playerSelection}`;
        }
        //Check for victory
        else if (winStates.get(playerSelection) === computerSelection) {
            log = `\tWin! ${playerSelection} beats ${computerSelection}`;
            turn++;
            score++;
        } else {
            //The only other game state is loss
            log = `\tLoss! ${computerSelection} beats ${playerSelection}`;
            turn++;
            score--;
        }
    } else {
        doScoring();
    }
    textDiv.innerText = `${log}\nScore: ${score}`;
}

function doScoring() {

    if (score > 0) {
        log = "You won the game!";
    } else {
        log = "You lost the game!";
    }

}


function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0: return "scissors";
        case 1: return "paper";
        case 2: return "rock";
    }
}

let textDiv;

function startGame() {
    let body = document.querySelector("body");
    document.querySelector("button").remove();
    //Create UI elements
    let rockBtn = document.createElement("button");
    rockBtn.innerText = "Rock";
    rockBtn.addEventListener("click", playRound.bind(this, "rock"));
    let paperBtn = document.createElement("button");
    paperBtn.innerText = "Paper";
    paperBtn.addEventListener("click", playRound.bind(this, "paper"));
    let scissorsBtn = document.createElement("button");
    scissorsBtn.innerText = "Scissors";
    scissorsBtn.addEventListener("click", playRound.bind(this, "scissors"));

    //create divs
    let gameDiv = document.createElement("div");
    gameDiv.setAttribute("style",
        "display: flex; flex-direction: column; justify-content: center; align-items: center"
    );
    let btnDiv = document.createElement("div");
    btnDiv.setAttribute("style", "display: flex; flex-direction: row;");
    textDiv = document.createElement("div");
    textDiv.setAttribute("style",
        "display: flex;"
    );
    btnDiv.appendChild(rockBtn);
    btnDiv.appendChild(paperBtn);
    btnDiv.appendChild(scissorsBtn);
    gameDiv.appendChild(btnDiv);
    gameDiv.appendChild(textDiv);
    body.appendChild(gameDiv);
}