const $gridCircles = document.querySelectorAll(
  ".grid-circle"
);


// Ajouter le joueur courant
let currentPlayer = "r"

// Ajouter le tableau multi-dimensionel
let gameboard = [
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
  ["", "", "", "", "", "", ""],
]


function checkWin() {
  console.log("Est-ce que quelqu'un a gagné ?")

  // 
}


$gridCircles.forEach(function ($gridCircle) {
  $gridCircle.addEventListener("click", function () {
    const dataX = $gridCircle.getAttribute("data-x")
    const dataY = $gridCircle.getAttribute("data-y")
    
    for (let i = 5; i >= 0; i--) {
      if (gameboard[i][dataX] === "") {
        console.log("C'est vide");

        gameboard[i][dataX] = currentPlayer
        const $selectedCell = document.querySelector(`.grid-circle[data-x="${dataX}"][data-y="${i}"]`)

        checkWin()

        if (currentPlayer === "r") {
          $selectedCell.classList.add("red-token")
          currentPlayer = "y"
        } else {
          $selectedCell.classList.add("yellow-token")
          currentPlayer = "r"
        }

        gameboard[dataY][dataX] = currentPlayer;


        return
      } else {
        console.log("C'est pas vide");
      }
    }

  })
})

