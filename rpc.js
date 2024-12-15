let computerChoice;
let userChoice;
let computerScore = 0;
let userScore = 0;
let isDraw = false;
let hasWon = false; 

function getComputerChoice(){
    let rng = Math.floor(Math.random() * 3);

    switch(rng){
        case 0: computerChoice = "rock"; break;
        case 1: computerChoice = "paper"; break;
        default: computerChoice = "scissors"; break;
    }

    console.log(computerChoice);
}

function getUserChoice(){
    userChoice = prompt("Type in 'Rock', 'Paper' or 'Scissors'", "").toLowerCase();

    switch(userChoice){
        case "rock":
        case "paper":
        case "scissors": break;
        default: userChoice = "scissors"; break; // for some users it's really hard to type in "scissors"
    }

    console.log(userChoice);
}

function decideWinner(){
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

getComputerChoice();
getUserChoice();
decideWinner();


