let startButton = document.getElementById("start-btn");
let highScores = document.getElementById("highscores-btn");
let questionContainer = document.getElementById("question-container");

//Start Button
startButton.addEventListener("click", startQuiz);

//Countdown Timer: 15 seconds for each question
//Need to fix timer so that it will reset for each question
let sec = 15;
let time = setInterval(Timer, 1000);

function Timer(){
    document.getElementById("timer").innerHTML = "Timer: You have " + sec + " seconds remaining";
    sec--;
    if (sec == -1) {
        clearInterval(time);
        alert("You are out of time!")
    }
}


//Start Quiz
//Hide Start and High Scores buttons once Quiz has been initiated
function startQuiz(){
    console.log("Started Quiz");
    startButton.classList.add('hide');
    highScores.classList.add("hide");
    questionContainer.classList.remove("hide");
}