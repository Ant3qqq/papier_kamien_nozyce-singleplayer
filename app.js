const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("wynikGracza");
const computerScore_span = document.getElementById("wynikKomputera");
const scoreBoard_div = document.querySelector(".tablicaPunktow");
const result_div = document.querySelector(".wynik");
const rock_div = document.getElementById("k");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("n");

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3); 
    return choices[randomNumber];
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    console.log("computer choice =>"+computerChoice);
    console.log("user choice =>" + userChoice)
}

function main(){

    rock_div.addEventListener('click', function() {
        game("r");
    });

    paper_div.addEventListener('click', function() {
        game("p");
    });

    scissors_div.addEventListener('click', function() {
        game("s");
    });
}

main();






















