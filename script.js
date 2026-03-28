let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    return Math.floor(Math.random() * 3);
}

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
let yourScore = document.getElementById("score");
let cpuScore = document.getElementById("cpuScore");
let winner = document.getElementById("winner");

function playRound(humanChoice, computerChoice){
    if(humanScore===5 || computerScore===5){
        return;
    }

    if((humanChoice===0 && computerChoice===1)){
        computerScore++;
        //console.log("You lose! Paper beats rock!");
    } 
    else if((humanChoice===1 && computerChoice===2)){
        computerScore++;
        //console.log("You lose! Scissors beat paper!");
    }
    else if((humanChoice===2 && computerChoice===0)){
        computerScore++;
        //console.log("You lose! Rock beats scissors!");
    }
    else if((humanChoice===0 && computerChoice===2)){
        humanScore++;
        //console.log("You win! Rock beats scissors!");
    }
    else if((humanChoice===2 && computerChoice===1)){
        humanScore++;
        //console.log("You win! Scissors beat paper!");
    }
    else if((humanChoice===1 && computerChoice===0)){
        humanScore++;
        //console.log("You win! Paper beats rock!");
    }
    else{
        return;
        //console.log("Draw!");
    }

    yourScore.textContent = "Your score: " + humanScore;
    cpuScore.textContent = "CPU score: " + computerScore;

    if(humanScore===5){
        winner.textContent = "You win!";
    }
    else if(computerScore===5){
        winner.textContent = "Computer wins!";
    }
}
rockBtn.addEventListener("click", () => {
    playRound(0, getComputerChoice());
});
paperBtn.addEventListener("click", () => {
    playRound(1, getComputerChoice());
});
scissorsBtn.addEventListener("click", () => {
    playRound(2, getComputerChoice());
});


