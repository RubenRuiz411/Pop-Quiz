var answersEl = document.getElementById('answers'); // dom selector for possible answers 
var startButton = document.getElementById('start'); // dom selector for startquiz button
var questionEl = document.getElementById('actual-question'); // dom selector for possible question 
// var of objects with all possible questions answers and the correct answers 
var quizQuestions = [
{
    question: "In CSS, which property is used to change the background color of an element?",
    answers: ["color","background-color","background-image","background"],
    correctAnswer: "background-color",
},
{
    question: "Which of the following is NOT a valid JavaScript data type?",
    answers: ["string","boolean","number","object-oriented"],
    correctAnswer: "object-oriented",
},
{
    question: "In HTML, which tag is used to define an unordered list?",
    answers: ["<list>","<ul>","<li>","<ol>"],
    correctAnswer: "<ul>",
},
{
    question: "What does CSS stand for?",
    answers: ["Cascading Style Sheets","Creative Style System","Colorful Style Selector","Computer Style Script"],
    correctAnswer: "Cascading Style Sheets",
},
{
    question: "Which JavaScript function is used to add an element to the end of an array?",
    answers: ["push()","pop()","shift()","unshift()"],
    correctAnswer: "push()",
}
]

var dislplayedQuestion= 0; // var placeholder to keep track of which question we are showing the user
var choicesEl = document.getElementById('choices'); // dom selector for possible answers
var time = 60; // time
var clock; // time counting down
var displaytime = document.getElementById('timeDisplay')// dom selector to place the time on the html
var showgif = document.getElementById('gif') // dom selector to display looping image on page
// function to show the questions and possible answers then run the quiz function
function showQuiz() {
  showgif.removeAttribute('class', 'hide');
    clock = setInterval(timeleft, 1000);
    displaytime.removeAttribute('class', 'hide');
    var shownQuestion = document.getElementById('quiz-goes-here');
    shownQuestion.setAttribute('class', 'hide');
    questionEl.removeAttribute('class');   
    showQuestion();
  }

var furelise = new Audio('assets/furelisemidi.mp3'); // var that is pointing to mp3 in assets folder
// function will start the music then run a loop to display question/answer object properties contained in quizQuestions variable 
function showQuestion() {
  furelise.play()
    var actualQuestion = quizQuestions[dislplayedQuestion];  
    var askedQuestionEl = document.getElementById('actual-question');
    askedQuestionEl.textContent = actualQuestion.question;
  answersEl.innerHTML = '';
    for (var i = 0; i < actualQuestion.answers.length; i++) {
        var option = actualQuestion.answers[i];
        var optionButton = document.createElement('button');
        optionButton.setAttribute('class', 'answersButton');
        optionButton.setAttribute('value', option);    
        optionButton.textContent = option;    
        answersEl.appendChild(optionButton);
      }
    }

var userisrightorwrong = document.getElementById('userisrightorwrong'); // dom selector for popup telling user if they are right/wrong
var closingtime = new Audio('assets/closingtimemidi.mp3'); // var pointing to mp3 in assets folder
// function to run when the answer is selected with if/else statements and to figure out if the user is right or wrong and possible penalty
function chosenAnswer(event) {
  var buttonEl = event.target;  
  if (buttonEl.value !== quizQuestions[dislplayedQuestion].correctAnswer) {
    userisrightorwrong.textContent = "wrong!";
    userisrightorwrong.setAttribute('class', 'useriwrong');
    time -= 10;
    if (time < 0) {
        time = 0;
      }
      displaytime.textContent = time;
      checkTime();
  } else {
    userisrightorwrong.setAttribute('class', 'userisright');
    userisrightorwrong.textContent = "Correct!"    
  }
  dislplayedQuestion++;
  if (time <= 0 || dislplayedQuestion === quizQuestions.length) {
    quit();
    showgif.setAttribute('class', 'hide');
    questionEl.setAttribute('class', 'hide');
    answersEl.setAttribute('class', 'hide');
    userisrightorwrong.setAttribute('class', 'hide');
  } else {
  showQuestion();
}
}
// function for when the quiz ends either by running out of questions or the time running out / below -0
function quit() {
  clearInterval(clock);
  var endScreenEl = document.getElementById('areyouSmart');
  endScreenEl.removeAttribute('class');
  questionEl.setAttribute('class', 'hide');
  var score = document.getElementById('user-score');
  score.textContent = time;
  furelise.pause();
  closingtime.play() 
}
// function to find out how much time is left and to update the time
function timeleft() { 
    time--;
    checkTime();    
    displaytime.textContent = time;
  }
// function to check time and hide elements if the time is below -0
function checkTime(){
    if (time <= 0) {
      showgif.setAttribute('class', 'hide');
      questionEl.setAttribute('class', 'hide');
      answersEl.setAttribute('class', 'hide');
      userisrightorwrong.setAttribute('class', 'hide');
      quit();
    }
  }

startButton.onclick = showQuiz; // listener to run function when the start quiz button is clicked 
answersEl.onclick = chosenAnswer; // listener to run function when an answer button is clicked 





var saveScore = document.getElementById('savescore');
var enteredName = document.getElementById('name-text');
saveScore.onclick = saveScoretoRanking;
function saveScoretoRanking() {
  var playerName = enteredName.value.trim();
  if (playerName !== '') {
    var rankings =
      JSON.parse(window.localStorage.getItem('scores')) || [];
    var newRank = {
      score: time,
      name: playerName,
    };
    rankings.push(newRank);
    window.localStorage.setItem('scores', JSON.stringify(rankings));
    window.location.href = 'rankings.html';
  }
}