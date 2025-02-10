const $gridCircles = document.querySelectorAll(
    ".grid-circle"
  );

  console.log($gridCircles)

 $gridCircles.forEach(function($gridCircle){
    $gridCircle.addEventListener("click", function(){
        $gridCircle.classList.add("yellow-token")
    })
 })