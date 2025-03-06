let userScore = 0;
let HimanshuScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const HimanshuScorePara = document.querySelector("#Himanshu-score");


const GenerateHimanshuChoice = () => {
    let options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

const drawGame = () => {
    console.log("game was draw.");
    msg.innerText = "game Draw but you has not win to HN. Play again.";
    msg.style.backgroundColor = "orange";


};


const showWinner = (userWin, userChoice, HimanshuChoice) => {
if(userWin) {
    userScore++;
    userScorePara.innerText = userScore;
    console.log("you win!");
    msg.innerText = `You win! Your ${userChoice} beaten HN ${HimanshuChoice} take 46 billion of suqidHN game 2🤑`;
    msg.style.backgroundColor = "green";
 } else {
    HimanshuScore++;
    HimanshuScorePara.innerText = HimanshuScore;
    console.log("you lose");
    msg.innerText = `You lose! HN ${HimanshuChoice}  beaten Your ${userChoice} ab party ...🙄😏`;
    msg.style.backgroundColor = "red";


 }
};




const playGame = (userChoice) => {
    console.log("user choice = ", userChoice);
    //Generate Himanshu choice 
    const HimanshuChoice = GenerateHimanshuChoice();
    console.log("Himanshu choice = ", HimanshuChoice);




    if (userChoice === HimanshuChoice) {
        //draw Game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            //scissors, paper
            userWin = HimanshuChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            //rock, scissors
            userWin = HimanshuChoice === "scissors" ? false : true;
        } else {
            //rock, paper
            userWin = HimanshuChoice === "rock" ? false : true;
        }
            showWinner(userWin, userChoice, HimanshuChoice);
        }
    };



choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    });
});

