const computerChoiceDisplay = document.getElementById('comp');
const userChoiceDisplay = document.getElementById('user');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');
let userChoice
let computerChoice
let result

let userName = document.getElementById('user')
let userNameInput = document.getElementById('username')



possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e)=>{
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice()
    getResult();
}))

function generateComputerChoice(){
    const randonNumber = Math.floor(Math.random() * possibleChoices.length++)
    
    if( randonNumber === 0) {
        computerChoice = 'rock'
    } else if(randonNumber === 1){
        computerChoice = 'paper'
    } else if(randonNumber === 2){
        computerChoice = 'scissors'
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult(){
    if (computerChoice === userChoice){
        result = "Tied!"
    } else if(computerChoice === 'rock' && userChoice === 'paper') {
        result = "Win!"
    } else if(computerChoice === 'rock' && userChoice === 'scissors'){
        result = 'Loss!'
    } else if (computerChoice === 'paper' && userChoice === 'scissors'){
        result = 'Win!'
    } else if(computerChoice === 'paper' && userChoice === 'rock'){
        result = 'Loss!'
    } else if(computerChoice === 'scissors' && userChoice === 'rock'){
        result = 'Win!'
    } else if(computerChoice === 'scissors' && userChoice === 'paper'){
        result = 'Loss!'
    }
    resultDisplay.innerHTML = result;
}

/*let form = document.getElementById('username-form');
form.addEventListener("submit", (e) =>{
    e.preventDefault();
    let username = form.elements["username"].value;
})
*/