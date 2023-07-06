var score = 0
//MOVE LOCAL STORAGE TO WHERE IT PULLS UP ON FINAL SCORE SCREEN
var highScore = localStorage.getItem("High Score ");
var initials = localStorage.getItem("Player: ")
var finalScore = document.getElementById("finalScore");
var userInitials = document.getElementById("userInitials");
var userScoreInitials = document.getElementById('UserScore&Initials')
var submitButton = document.getElementById('submitButton')
var correctMessage = document.getElementById("correctMessage");
var wrongMessage = document.getElementById("wrongMessage");
var secondsLeft = 25;
var timeLeft = document.getElementById("timeLeft")
console.log(score);
var startPage = document.getElementById('startPage');
var startButton = document.getElementById("startButton");
var question = document.getElementById("question");
var headingQuestion = document.getElementById("heading-question");
var scorePage = document.getElementById("scorePage");
var correctAnswer = '';
// use the same class for every question from the HTML
var button1 = document.getElementById("choice1");
var button2 = document.getElementById("choice2");
var button3 = document.getElementById("choice3");
var button4 = document.getElementById("choice4");
//need to create an index of questions
var questionIndex = 0;
var listOfQuestions = [
    {
        heading:"Which of the will default to a decimal?", 
        choice1: "split",
        choice2: "Math.Floor", //this is the correct answer
        choice3: "math.random",
        choice4: "slice",
        correctAnswer: "Math.Floor"
    },
    {
        heading: "Which of the following is a method?",
        choice1: "split", //this is the correct answer
        choice2: "for",
        choice3: "if else",
        choice4: "what else",
        correctAnswer: "split"
    },
    {
        heading: "Common Data Types in JavaScript DO NOT include...",
        choice1: "alerts", //this is the correct answer
        choice2: "booleans", 
        choice3: "numbers",
        choice4: "strings",
        correctAnswer: "alerts"
    },
    {
        heading: "if else statements contained within",
        choice1: "parenthesis", 
        choice2: "curly brackets", //this is the correct answer
        choice3: "square brackets",
        choice4: "quotes",
        correctAnswer: "curly brackets"
    },
    {
        heading: "for loops must have what notation within the parenthesis",
        choice1: "semicolon", //this is the correct answer
        choice2: "commas",
        choice3: "quotes",
        choice4: "slashes",
        correctAnswer: "semicolon"
    },
    {
        heading: "you finished the last question before time was up! Congrats!",
    }
];
//need to create a variable for current Question
var currentQuestion = listOfQuestions[questionIndex];

// startPage disappears after user clicks startButton
//advancePage1 runs after the startPage
startButton.addEventListener("click", advancePage);
question.style.display = "none";
scorePage.style.display = "none";


function setTimer() {
    var timerInterval = setInterval(function () {
        secondsLeft --;
        timeLeft.textContent = secondsLeft + " seconds left!"
        if(secondsLeft === 0 || questionIndex === 5) {
            clearInterval(timerInterval);;
            question.style.display = "none"
            scorePage.style.display = "block";
            finalScore.textContent = "Total points: " + score;
            function addHighScore() {
                var initials = document.getElementById("userInitials").value;
                console.log(initials)
                var node = document.createElement("li");
                var textnode = document.createTextNode(initials + " " + score + " points") ;
                node.appendChild(textnode);
                document.getElementById("UserScore&Initials").appendChild(node);
                localStorage.setItem("High Score ", score);
                localStorage.setItem("Player: ", initials);
            }
            submitButton.addEventListener('click', addHighScore);
            
        }        
    }, 1000);
}
function checkAnswer() {
    console.log("this is the correct answer ", listOfQuestions[questionIndex].correctAnswer);
    console.log("this is what the user picked ", this);
    console.log(this.textContent);
    if (listOfQuestions[questionIndex].correctAnswer === this.textContent) {
        score += 5;
        console.log(score);
        var correctTimeout = setTimeout(
        correctMessage.textContent = "Correct!", 1000);
        clearTimeout(correctTimeout);
    } else {
        secondsLeft -= 2;
        correctMessage.textContent = "Wrong, 2 seconds deducted from timer"
    }
    if (questionIndex === listOfQuestions.length -1) {
        question.style.display = "none"
        scorePage.style.display = "block";
        finalScore.textContent = "Total points: " + score;
        console.log(secondsLeft);
        return;
    } else {
        currentQuestion = listOfQuestions[questionIndex += 1];
        showQuestion();
    }
}
function showQuestion() {
    currentQuestion.heading
    console.log(currentQuestion.heading);
    headingQuestion.textContent = currentQuestion.heading;
    console.log(currentQuestion.choice1, currentQuestion.choice2, currentQuestion.choice3, currentQuestion.choice4);
    button1.textContent = currentQuestion.choice1; 
    button2.textContent = currentQuestion.choice2; 
    button3.textContent = currentQuestion.choice3;
    button4.textContent = currentQuestion.choice4;
    // var nextButton = document.getElementById("nextButton");
    // nextButton.textContent = "Next question";
    button1.addEventListener("click", checkAnswer);
    button2.addEventListener("click", checkAnswer);
    button3.addEventListener("click", checkAnswer);
    button4.addEventListener("click", checkAnswer);
    console.log(secondsLeft + " seconds left");
    console.log("you are on question #" + (questionIndex +1))

    };

//question 1 appears and startPage is hidden
function advancePage() {
    console.log("click")
    startPage.style.display = "none"
    question.style.display = "block";
    showQuestion();
    setTimer();
}
//start the timer


console.log(secondsLeft);
//question1 grabs the appropriate heading and choices from array of listOfQuestions in index 0


// function getScore() {
//     if (button2.getEventListener()))
// }
//two ways to do
//use keyword of "this"
//google javascript t
// nextButton.addEventListener("click", showQuestion);

//I will need to create another function to advance to next question

        // ---------------------------------------------------------
// I will need to create a data storage for the correct answer

function keepScore() {

}
//this will need an if statement



