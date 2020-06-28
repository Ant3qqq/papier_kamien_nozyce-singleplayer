var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("wynikGracza");
const computerScore_span = document.getElementById("wynikKomputera");
const scoreBoard_div = document.querySelector(".tablicaPunktow");
const result_p = document.querySelector(".wynik > p");
const rock_div = document.getElementById("k");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("n");

function getComputerChoice(){
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3); 
    return choices[randomNumber];
}

function convertToWord(letter){
    switch(letter){
        case "r":
            return "Kamień";
        case "p":
            return "Papier";
        case "s":
            return "Nożyce";

    }
}

function win(user, computer){
    userScore++;
    userScore_span.innerHTML = userScore;
    //computerScore_span.innerHTML = computerScore;
    const smallUser = "gracz".fontsize(3).sub();
    const smallComp = "komputer".fontsize(3).sub();
    if(user == "s"){
        result_p.innerHTML = (convertToWord(computer) + smallUser + " biją " + convertToWord(computer) + smallComp +" Wygrywasz!");
    } else {
        result_p.innerHTML = (`${convertToWord(user)} ${smallUser} bije ${convertToWord(computer)} ${smallComp} Wygrywasz!`);
    }
    document.getElementById(convertToWord(user).charAt(0).toLowerCase()).classList.add('greenGlow');
    setTimeout(() =>  document.getElementById(convertToWord(user).charAt(0).toLowerCase()).classList.remove('greenGlow') , 300)
}



function lose(user, computer){
    computerScore++;
    //userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    const smallUser = "gracz".fontsize(3).sub();
    const smallComp = "komputer".fontsize(3).sub();
    if(user == "s"){
        result_p.innerHTML = (`${convertToWord(computer)} ${smallComp} biją ${convertToWord(user)} ${smallUser}  Przegrywasz :(`);
    } else {
        result_p.innerHTML = (`${convertToWord(computer)} ${smallComp} bije ${convertToWord(user)} ${smallUser} Przegrywasz :(`);
    }
    document.getElementById(convertToWord(user).charAt(0).toLowerCase()).classList.add('redGlow');
    setTimeout(() =>  document.getElementById(convertToWord(user).charAt(0).toLowerCase()).classList.remove('redGlow') , 300);
}

function draw(user, computer){
    result_p.innerHTML = "Remis";
    const smallUser = "gracz".fontsize(3).sub();
    const smallComp = "komputer".fontsize(3).sub();
    if(user == "s"){
        result_p.innerHTML = (`${convertToWord(computer)} ${smallComp} równają się ${convertToWord(user)} ${smallUser}  Remis`);
    } else {
        result_p.innerHTML = (`${convertToWord(computer)} ${smallComp} równa się ${convertToWord(user)} ${smallUser} Remis`);
    }
    document.getElementById(convertToWord(user).charAt(0).toLowerCase()).classList.add('greyGlow');
    setTimeout(() => document.getElementById(convertToWord(user).charAt(0).toLowerCase()).classList.remove('greyGlow') , 300);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch(userChoice + computerChoice){
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main(){

    rock_div.addEventListener('click', () => game("r"));

    paper_div.addEventListener('click',() => game("p"));

    scissors_div.addEventListener('click', () => game("s"));
}

main();






















