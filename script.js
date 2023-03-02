function playerText = document.querySelector("#playerText");
function computerText = document.querySelector("#computerText");
function resultText = document.querySelector("#resultText");
function choiceBtns = document.querySelectorall(".choiceBtn")
let player;
let computer;
let result;

choiceBtns.foreach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = 'player: ${player}';
    computerText.textContent = 'Computer: ${player}';
    resultText.textContent = checkWinner();
}));

function computerTurn(){
    function randNum = Math.floor(Math.random() * 3) + 1;

    switch(randNum) {
        case 1:
            computer = "ROCK";
            break;
        case 2:
            computer = "PAPER";
             break;

        case 3:
             computer = "SCISSOR";
            break;
    }
}
function checkWinner() {
    if(player == computer){
        return "Draw!";
    }
    else if (computer == "ROCK"){
        return (player == "PAPER") ? "You Win!" : "You Lose!"
    }
    else if (computer == "PAPER"){
        return (player == "SCISSOR") ? "You Win!" : "You Lose!"
    }
    else if (computer == "ROCK"){
        return (player == "ROCK") ? "You Win!" : "You Lose!"
    }
}