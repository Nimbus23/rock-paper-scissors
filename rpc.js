let computerChoice;
let userChoice;
let computerScore = 0;
let userScore = 0;
let isDraw = false;
let hasWon = false;

const rockBtn = document.querySelector("#rockBtn");
const paperBtn = document.querySelector("#paperBtn");
const scissorsBtn = document.querySelector("#scissorsBtn");

const buttons = document.querySelector(".buttons");
const resultDiv = document.querySelector(".result");

const resultPara = document.createElement("p");
const scorePara = document.createElement("p");
const h2 = document.createElement("h2");

function getComputerChoice(){
    let rng = Math.floor(Math.random() * 3);

    switch(rng){
        case 0: computerChoice = "rock"; break;
        case 1: computerChoice = "paper"; break;
        default: computerChoice = "scissors"; break;
    }
}

function decideRoundWinner(){
    if(userChoice === computerChoice){
        isDraw = true;
    }else if(userChoice === "rock" && computerChoice === "scissors"){
        hasWon = true;
    }else if(userChoice === "paper" && computerChoice === "rock"){
        hasWon = true;
    }else if(userChoice === "scissors" && computerChoice === "paper"){
        hasWon = true;
    }

    increaseScore();
    
    isDraw = false;
    hasWon = false;
}

function increaseScore(){
    if(isDraw){
        resultPara.textContent = `Draw. You both used ${userChoice}`;
    }else if(hasWon){
        resultPara.textContent = `You won! By ${userChoice} and ${computerChoice}`;
        userScore ++;
    }else{
        resultPara.textContent = `You lost. By ${userChoice} and ${computerChoice}`;
        computerScore ++;
    }
}

function showScore(){
    scorePara.textContent = `The score is ${userScore} : ${computerScore}`;
}

function decideGameWinner(){
        resultPara.textContent = "";

        if(userScore > computerScore){
            h2.textContent = "Congratulations!!! You won!";
        }else if(computerScore > userScore){
            h2.textContent = "What a pity. You lost.";
        }
        resultDiv.insertBefore(h2, scorePara);
}

function stopGame(){
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
}

function playRound(){
    getComputerChoice();
    decideRoundWinner();
    showScore();

    if(userScore === 5 || computerScore === 5){
        decideGameWinner();
        stopGame();
    }
}

buttons.addEventListener("click", (event) => 
    {
        switch(event.target.id)
        {
            case "rockBtn": userChoice = "rock"; playRound(); break;
            case "paperBtn": userChoice = "paper"; playRound(); break;
            case "scissorsBtn": userChoice = "scissors"; playRound(); break;
        }
});

resultDiv.appendChild(resultPara);
resultDiv.appendChild(scorePara);




