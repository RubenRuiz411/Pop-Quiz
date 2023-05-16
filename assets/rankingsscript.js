var goodriddance = new Audio('assets/goodriddance.mp3');
goodriddance.play()

function displayRanking() {

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
  

  
  
displayRanking();
  