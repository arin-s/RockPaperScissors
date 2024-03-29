"use strict";



const winStates = new Map();
winStates.set("scissors", "paper");
winStates.set("paper", "rock");
winStates.set("rock", "scissors");

let log;
let score = 0;
let turn = 1;

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    let state;
    //Check for ties
    if (playerSelection === computerSelection) {
        log += `\tTie! You both picked ${playerSelection}`;
        score--;
    }
    //Check for victory
    else if (winStates.get(playerSelection) === computerSelection) {
        log += `\tWin! ${playerSelection} beats ${computerSelection}`;
        turn++;
    } else {
        //The only other game state is loss
        log += `\tLoss! ${computerSelection} beats ${playerSelection}`;
        state = "loss";
    }
    //
    doScoring();
}

function doScoring() {

    if (score > 0) {
        console.log("You won the game!")
    } else {
        console.log("You lost the game!");
    }

}


function getComputerChoice() {
    switch (Math.floor(Math.random() * 3)) {
        case 0: return "scissors";
        case 1: return "paper";
        case 2: return "rock";
    }
}

function startGame() {
    let body = document.querySelector("body");
    document.querySelector("button").remove();
    //Create UI elements
    let rockBtn = document.createElement("button");
    rockBtn.innerText = "Rock";
    rockBtn.addEventListener("click", playRound("rock"));
    let paperBtn = document.createElement("button");
    paperBtn.innerText = "Paper";
    paperBtn.addEventListener("click", playRound("paper"));
    let scissorsBtn = document.createElement("button");
    scissorsBtn.innerText = "Scissors";
    scissorsBtn.addEventListener("click", playRound("scissors"));

    let btnDiv = document.createElement("div");
    btnDiv.setAttribute("style", "display: flex; flex-direction: row;");
    let imgDiv = document.createElement("div");
    imgDiv.setAttribute("style", "display: flex; flex-direction: row;");
    btnDiv.appendChild(rockBtn);
    btnDiv.appendChild(paperBtn);
    btnDiv.appendChild(scissorsBtn);
    body.appendChild(btnDiv);
    body.appendChild(imgDiv);
}