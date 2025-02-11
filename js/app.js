const $gridCircles = document.querySelectorAll(
  ".grid-circle"
);


// Ajouter le joueur courant
let currentPlayer = "y"

// Ajouter le tableau multi-dimensionel
let gameboard = [
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
]


$gridCircles.forEach(function ($gridCircle) {
  $gridCircle.addEventListener("click", function () {
    const dataX = $gridCircle.getAttribute("data-x")
    const dataY = $gridCircle.getAttribute("data-y")

    console.log(gameboard)
    console.log(gameboard[5][1])

    for (let i = 5; i >= 0; i--) {
      if (gameboard[i][x] === "") {
        console.log("C'est vide");
      } else {
        console.log("C'est pas vide");
      }
    }


    // if (currentPlayer === "y") {
    //   $gridCircle.classList.add("yellow-token")
    //   currentPlayer = "r"
    // } else {
    //   $gridCircle.classList.add("red-token")
    //   currentPlayer = "y"
    // }
    
  })
})

