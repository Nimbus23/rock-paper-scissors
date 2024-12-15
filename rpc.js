let computerChoice;

function getComputerChoice(){
    let rng = Math.floor(Math.random() * 3);

    switch(rng){
        case 0: computerChoice = "rock"; break;
        case 1: computerChoice = "paper"; break;
        default: computerChoice = "scissors"; break;
    }

    console.log(computerChoice);
}

getComputerChoice();
