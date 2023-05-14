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

function showQuiz() {
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

  //if (!buttonEl.matches(".answersButton")) {
   //return;
 // }
  

  if (buttonEl.value !== quizQuestions[dislplayedQuestion].correctAnswer) {

    userisrightorwrong.textContent = "wrong!";
    userisrightorwrong.setAttribute('class', 'useriwrong')
  } else {
    userisrightorwrong.setAttribute('class', 'userisright');
    userisrightorwrong.textContent = "Correct!"

  }




  dislplayedQuestion++;
  showQuestion()
}


function quizEnd(


) {}



startButton.onclick = showQuiz;

answersEl.onclick = chosenAnswer;
