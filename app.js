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
    const name = "dupa";
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            console.log("GRACZ WYGRYWA.");
            break;
        case "sr":
        case "rp":
        case "ps":
            console.log("KOMPUTER WYGRYWA.");
            break;
        case "rr":
        case "pp":
        case "ss":
            console.log("REMIS");
            break;
    }
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






















