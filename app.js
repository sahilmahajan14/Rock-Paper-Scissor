let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
const restart = document.querySelector("#restart");

const showWinner = (userWin,userChoice, computerChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win! ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
    }
    else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose! ${computerChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
    console.log("User Score", userScore);   
    console.log("Computer Score", compScore);
}

const resetGame = () => {
    userScore = 0;
    compScore = 0;
    userScorePara.innerText = userScore;
    compScorePara.innerText = compScore;
    msg.innerText = "Rock Paper Scissors";
    msg.style.backgroundColor = "#081b31";
}


const genComputerChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const drawGame = () => {
    console.log("Draw");
    msg.innerText = 'Draw! Play again';
    msg.style.backgroundColor = "#081b31";
}

const playgame = (userChoice) => {
    console.log("User Choice", userChoice);
    const computerChoice = genComputerChoice();
    console.log("Computer Choice", computerChoice);
    if(userChoice === computerChoice) {
        drawGame();
    }
    else {
        let userWin = true;
        if (userChoice === "rock") {
            //scissors, paper
            userWin = computerChoice === "paper" ? false : true;
        }
        else if (userChoice === "paper") {
            //rock, scissors
            userWin = computerChoice === "scissors" ? false : true;
        }
        else {
            //rock, paper
            userWin = computerChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, computerChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playgame(userChoice);
    });
});

restart.addEventListener("click", resetGame);