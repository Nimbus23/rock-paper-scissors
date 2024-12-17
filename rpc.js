let computerChoice;
let userChoice;
let computerScore = 0;
let userScore = 0;
let isDraw = false;
let hasWon = false;

const rockBtn = document.querySelector("button");
const scissorsBtn = document.querySelectorAll("button");
const paperBtn = document.querySelector("button");
const bod = document.querySelector("body");

function getComputerChoice(){
    let rng = Math.floor(Math.random() * 3);

    switch(rng){
        case 0: computerChoice = "rock"; break;
        case 1: computerChoice = "paper"; break;
        default: computerChoice = "scissors"; break;
    }

    //console.log(computerChoice);
}

function getUserChoice(){
    userChoice = prompt("Type in 'Rock', 'Paper' or 'Scissors'", "").toLowerCase();

    switch(userChoice){
        case "rock":
        case "paper":
        case "scissors": break;
        default: userChoice = "scissors"; break; // for some users it's really hard to type in "scissors"
    }

    //console.log(userChoice);
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
        console.log(`Draw. You both used ${userChoice}`);
        computerScore ++;
        userScore ++;
    }else if(hasWon){
        console.log(`You won! By ${userChoice} and ${computerChoice}`);
        userScore ++;
    }else{
        console.log(`You lose. By ${userChoice} and ${computerChoice}`);
        computerScore ++;
    }
}

function showScore(){
    console.log(`The score is: ${userScore} : ${computerScore}`);
}

function playRound(){
    getComputerChoice();
    //getUserChoice();
    decideRoundWinner();
    showScore();
}

bod.addEventListener("click", (event) => 
    {
        switch(event.target.id)
        {
        case "rockBtn": userChoice = "rock"; playRound(); break;
        case "paperBtn": userChoice = "paper"; playRound(); break;
        case "scissorsBtn": userChoice = "scissors"; playRound(); break;
        }
});

/*
function decideGameWinner(){
    if(userScore > computerScore){
        console.log("Congratulations!!! You won!");
    }else if(computerScore > userScore){
        console.log("What a pity. You lose.");
    }else{
        console.log("It's a total draw.");
    }
}*/
/*
function playGame(){
    for(let i = 0; i < 5; i++){
        playRound();
    }
    decideGameWinner();
}*/

//playGame();






