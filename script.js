let humanScore, computerScore = 0;

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3);
    if(choice==0){
        return "rock";
    }
    else if(choice==1){
        return "paper";
    }
    else{
        return "scissors";
    }
}
function getHumanChoice(){
    let choice = prompt("rock, paper, scissors?");
    return choice;
}
function playRound(humanChoice, computerChoice){

    humanChoice = humanChoice.toLowerCase();

    if((humanChoice==="rock" && computerChoice==="paper")){
        computerScore++;
        console.log("You lose! Paper beats rock!");
    } 
    else if((humanChoice==="paper" && computerChoice==="scissors")){
        computerScore++;
        console.log("You lose! Scissors beat paper!");
    }
    else if((humanChoice==="scissors" && computerChoice==="rock")){
        computerScore++;
        console.log("You lose! Rock beats scissors!");
    }
    else if((humanChoice==="rock" && computerChoice==="scissors")){
        humanScore++;
        console.log("You win! Rock beats scissors!");
    }
    else if((humanChoice==="scissors" && computerChoice==="paper")){
        humanScore++;
        console.log("You win! Scissors beat paper!");
    }
    else if((humanChoice==="paper" && computerChoice==="rock")){
        humanScore++;
        console.log("You win! Paper beats rock!");
    }
    else{
        console.log("Draw!");
    }
}

function playGame(){
    for (let i = 0; i<5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}
playGame();
if(humanScore>computerScore){
    console.log("You win!");
}
else if(humanScore<computerScore){
    console.log("Computer wins!");
}
else{
    console.log("Draw!")
}