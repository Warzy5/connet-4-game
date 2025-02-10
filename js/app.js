const $gridCircles = document.querySelectorAll(
    ".grid-circle"
  );


// Ajouter le joueur courant
// Ajouter le tableau multi-dimensionel
  let gameboard = [
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ]

 $gridCircles.forEach(function($gridCircle){
    $gridCircle.addEventListener("click", function(){
        $gridCircle.classList.add("yellow-token")
    })
 })