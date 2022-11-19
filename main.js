const btns = document.querySelectorAll('.btn');


let usersSelection;
let computerSelection
for(let i = 0; i < btns.length; i++){ 
    btns[i].addEventListener('click', () => {
        usersSelection = btns[i].getAttribute('id');
        computerSelection = getComputerChoice();

        console.log(usersSelection);
        console.log(computerSelection)

        console.log(check(usersSelection, computerSelection));
  })
} 

const emojis = {
    Rock: "✊",
    Paper: "✋",
    Scissors: "✌️"
}

// this function checks who the winner is it take 2 parameters which is players selection and computer selection (Rock, Paper or Scissors) it checks if
// the two parameters are the same it return a draw else it checks the winning conditions 
const check = function (playersSelection, computersSelection) {
    if(playersSelection == computersSelection){
        return "Draw";
    } else if((playersSelection == "Rock"|| computersSelection == "Rock") && (playersSelection == "Scissors"|| computersSelection == "Scissors")){
        if(playersSelection == "Rock") return "player1 Wins";
        else return "Computer wins";
    } else if((playersSelection == "Paper"|| computersSelection == "Paper") && (playersSelection == "Rock" || computersSelection == "Rock")){
        if(playersSelection == "Paper") return "player1 Wins";
        else return "Computer wins";
    } else if((playersSelection == "Scissors" || computersSelection == "Scissors") && (playersSelection == "Paper" || computersSelection == "Paper")){
        if(playersSelection == "Scissors") return "player1 Wins";
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
