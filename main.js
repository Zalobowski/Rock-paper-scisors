const btns = document.querySelectorAll('.btn');
const emojiUiContainers = document.querySelectorAll(".emoji");

const playerScoreUiContainer = document.querySelector('.playerScore');
const computerScoreUiContainer = document.querySelector('.computerScore');
const roundResultUiContainer = document.querySelector('.round-result');

let playerScore = 0;
let computerScore = 0;

let usersSelection;
let computerSelection
for(let i = 0; i < btns.length; i++){ 
    btns[i].addEventListener('click', () => {
        usersSelection = btns[i].getAttribute('id');
        computerSelection = getComputerChoice();
        updateUi(usersSelection, computerSelection, check(usersSelection, computerSelection))
  })
} 


const emojis = {
    Rock: "✊",
    Paper: "✋",
    Scissors: "✌️",
}

const updateUi = function (playersSelection, computerSelection, gameResult) {


    if(gameResult == "Player1 Wins"){
        playerScore  += 1;
    } else if(gameResult == "Computer wins"){
        computerScore  += 1;
    }

    emojiUiContainers[0].textContent = emojis[playersSelection];
    emojiUiContainers[1].textContent = emojis[computerSelection];
    playerScoreUiContainer.textContent = playerScore;
    computerScoreUiContainer.textContent = computerScore;
    roundResultUiContainer.textContent = gameResult;

}


// this function checks who the winner is it take 2 parameters which is players selection and computer selection (Rock, Paper or Scissors) it checks if
// the two parameters are the same it return a draw else it checks the winning conditions 
const check = function (playersSelection, computersSelection) {
    if(playersSelection == computersSelection){
        return "Draw";
    } else if((playersSelection == "Rock"|| computersSelection == "Rock") && (playersSelection == "Scissors"|| computersSelection == "Scissors")){
        if(playersSelection == "Rock") return "Player1 Wins";
        else return "Computer wins";
    } else if((playersSelection == "Paper"|| computersSelection == "Paper") && (playersSelection == "Rock" || computersSelection == "Rock")){
        if(playersSelection == "Paper") return "Player1 Wins";
        else return "Computer wins";
    } else if((playersSelection == "Scissors" || computersSelection == "Scissors") && (playersSelection == "Paper" || computersSelection == "Paper")){
        if(playersSelection == "Scissors") return "Player1 Wins";
        else return "Computer wins"
    }
}


const getComputerChoice = () => {
    const randomInt = Math.floor(Math.random() * 3) + 1;
    switch(randomInt){
        case 1 : return "Rock";
        case 2 : return "Paper";
        case 3 : return "Scissors";
    }
};
