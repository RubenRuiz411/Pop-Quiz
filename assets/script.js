var answersEl = document.getElementById('answers');
var startButton = document.getElementById('start');
var questionEl = document.getElementById('actual-question');
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
var dislplayedQuestion= 0;
var choicesEl = document.getElementById('choices');
var time = 60;
var clock;
var displaytime = document.getElementById('timeDisplay')
var showgif = document.getElementById('gif')
function showQuiz() {
  showgif.removeAttribute('class', 'hide');
    clock = setInterval(timeleft, 1000);
    displaytime.removeAttribute('class', 'hide');
    var shownQuestion = document.getElementById('quiz-goes-here');
    shownQuestion.setAttribute('class', 'hide');
    questionEl.removeAttribute('class');   
    showQuestion();
  }
  

 
function showQuestion() {
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

var userisrightorwrong = document.getElementById('userisrightorwrong');

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
  } else {
  showQuestion();


}
}


function quit() {
  clearInterval(clock);
  var endScreenEl = document.getElementById('areyouSmart');
  endScreenEl.removeAttribute('class');
  questionEl.setAttribute('class', 'hide');
  var score = document.getElementById('user-score');
  score.textContent = time;
  

}

function timeleft() { 
    time--;
    displaytime.textContent = time;
  }

function checkTime(){
    if (time <= 0) {
      quit();
    }
  }

startButton.onclick = showQuiz;
answersEl.onclick = chosenAnswer;





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