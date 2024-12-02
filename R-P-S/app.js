const buttons = document.querySelectorAll("button");
const resultEl = document.getElementById("result");
let playerscore = 0;
let computerscore = 0;
const playerscoreEl = document.getElementById("user-score");
const computerscoreEl = document.getElementById("computer-score");


buttons.forEach((button) => {
    button.addEventListener('click',() => {
        const result = playRound(button.id,computerPlay());
        resultEl.textContent = result;
    });
});
function computerPlay(){
    const choices = ["rock","paper","scissors"];
    const randomChoice = Math.floor(Math.random()*choices.length);
    return choices[randomChoice];
}
function playRound(playerSelection,computerSelection){
    if (playerSelection === computerSelection){
        return "It is a Tie!";
    }else if(
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ){
        playerscore++;
        playerscoreEl.textContent = playerscore;
        return "You Win ! " + playerSelection + " Beats" + " " + computerSelection;
    }else{
        computerscore++;
        computerscoreEl.textContent = computerscore;
        return "You Lose ! " + computerSelection + " Beats" + " " + playerSelection; 
    }
};

