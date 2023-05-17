// declared variable to select the appropriate mp3 in assets folder
var goodriddance = new Audio('assets/goodriddance.mp3');
// will play greenday goodriddance when the page is loaded 
goodriddance.play()
// first checking for scores saved in local storage then orders them and displays them using a loop
function displayRanking(){
    var shownScores = JSON.parse(window.localStorage.getItem('scores')) || [];
    shownScores.sort(function (a, b) {
      return b.score - a.score;
    });  
    for (var i = 0; i < shownScores.length; i += 1) {
      var liTag = document.createElement('li');
      liTag.textContent = shownScores[i].name + ' - ' + shownScores[i].score;  
      var olEl = document.getElementById('scores');
      olEl.appendChild(liTag);
    }
  }
  
// function button to clear the scores
function clearScores() {
    window.localStorage.removeItem('scores');
    window.location.reload();
  }
// dom selector for clear scores button and a clears data stored in localstorage
document.getElementById('clearrank').onclick = clearScores;
  
// runs the function as soon as page is loaded to dynamically display scores that are saved in the local storage
displayRanking();
  