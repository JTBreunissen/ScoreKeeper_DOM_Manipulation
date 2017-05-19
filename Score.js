var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var p1Display = document.querySelector("#p1Display")
var p2Display = document.querySelector("#p2Display")
var p1score = 0;
var p2score = 0;
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function() {
  if(!gameOver){
    p1score++
    if(p1score === winningScore){
      gameOver = true
    }
  p1Display.textContent = p1score;
  }
});

p2Button.addEventListener("click", function() {
  if(!gameOver){
    p2score++
    if(p2score === winningScore){
      gameOver = true
    }
  p2Display.textContent = p2score;
  }
});
