let computerChoice;
let userChoice;

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

    if(userChoice !== "rock" || userChoice !== "paper" || userChoice !== "scissors"){
        userChoice = "scissors";  // for some users it's really hard to type in "scissors"
    }

    console.log(userChoice);
}

getComputerChoice();
getUserChoice();
