
function getComputerChoice() {
    let ranNum = Math.random();
    if (ranNum <= 0.33) {
        return "rock";
    }
    else if (ranNum >= 0.33 && ranNum <= 0.67){
        return "paper";
    }
    else{
        return "scissors";
    }
}

function getHumanChoice(){
    let choice = prompt("Choose rock, paper, or scissors!");
    choice = choice.toLowerCase();
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if (humanChoice === "rock" && computerChoice === "rock"){
        console.log("No winners! Both chose rock!");
    }
    else if(humanChoice === "rock" && computerChoice === "paper"){
        console.log("You lose! Paper beats rock!");
        computerScore += 1;
    }
    else if(humanChoice === "rock" && computerChoice === "scissors"){
        console.log("You win! Rock beats scissors!");
        humanScore += 1;
    }
    else if(humanChoice === "paper" && computerChoice === "rock"){
        console.log("You win! Paper beats rock!");
        humanScore += 1;
    }
    else if(humanChoice === "paper" && computerChoice === "paper"){
        console.log("No winners! Both chose paper!");
    }
    else if(humanChoice === "paper" && computerChoice === "scissors"){
        console.log("You lose! Scissors beats paper!");
        computerScore += 1;
    }
    else if(humanChoice === "scissors" && computerChoice === "rock"){
        console.log("You lose! Rock beats scissors!");
        computerScore += 1;
    }
    else if(humanChoice === "scissors" && computerChoice === "paper"){
        console.log("You win! Scissors beats paper!");
        humanScore += 1;
    }
    else if(humanChoice === "scissors" && computerChoice === "scissors"){
        console.log("No winners! Both chose scissors!");
    }
}
function playGame(){
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
}

for (let i=0; i<5; i++){
    playGame();
}

if (humanScore > computerScore){
    console.log("You win!");
}
else if (humanScore < computerScore){
    console.log("You lose!");
}
else{
    console.log("It's a tie!");
}