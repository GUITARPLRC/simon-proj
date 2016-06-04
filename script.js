var red = document.getElementById("red"),
    green = document.getElementById("green"),
    blue = document.getElementById("blue"),
    yellow = document.getElementById("yellow"),
    start = document.getElementById("start"),
    end = document.getElementById("end"),
    myScore = document.getElementById("score");
    randNum = 0,
    score = 0,
    sequence = [],
    check = [],
    i = 0;
    
start.addEventListener("click", chooseColor, false);
end.addEventListener("click", endGame, false);

red.addEventListener("click", function() { checkSequence(1); }, false);
green.addEventListener("click", function() { checkSequence(2); }, false);
blue.addEventListener("click", function() { checkSequence(3); }, false);
yellow.addEventListener("click", function() { checkSequence(4); }, false);

end.disabled = true;

disableMouse(); //DISABLE MOUSE EVENTS ON COLORS

function randomNum() { //GENERATE RANDOM NUMBER
  
  randNum = Math.floor((Math.random() * 4) + 1);
  sequence.push(randNum); //PUSH RANDOM NUMBER TO ARRAY
  
}

function chooseColor() {
  
  randomNum();
  document.body.style.backgroundColor = "#ecf0f1";
  loop();
  
  start.disabled = true;
  end.disabled = false;
  
  changeScore();
  
}

function loop(){ //ILLUMINATE COLORS IN SEQUENCE
    
  switch(sequence[i]) {
  
    case 1: //1 = red
      showColor(red);
      setTimeout(function(){
        removeColor(red);
      }, 500);
      break;
    case 2: //2 = green
      showColor(green);
      setTimeout(function(){
        removeColor(green);
      }, 500);
      break;
    case 3: //3 = blue
      showColor(blue);
      setTimeout(function(){
        removeColor(blue);
      }, 500);
      break;
    case 4: //4 = yellow
      showColor(yellow);
      setTimeout(function(){
        removeColor(yellow);
      }, 500);
      break;
      
  }
  
  if (++i < sequence.length) {
    setTimeout(loop, 1000);
  }
  
  check = sequence.slice(0);
  
  enableMouse();
  
}

function showColor(a){ //MAKE COLORS APPEAR "ON"

  a.className += " select";
  
}

function removeColor(b) { //MAKE COLORS APPEAR "OFF"
  
  b.classList.remove("select");
  
}

function checkSequence(n) { //CHECK IF USER INPUT IS IN CORRECT ORDER
  
  i = 0; //RESET INDEX FOR ITERATING THROUGH SEQUENCE

  if (n === check[0]) { //INCREASE SCORE AND REMOVE FIRST INDEX
  
    score++;
 
    changeScore();
    
    check.shift();
    
    if (check.length === 0) {
    
      chooseColor();
      disableMouse();
    
    }
    
  } else { //WRONG CHOICE = GAME OVER!
    
    endGame();
    document.body.style.backgroundColor = "red";
    myScore.style.fontSize = "12px";
    myScore.textContent = "GAME OVER";
    
  }
 
}

function changeScore() {
  
  if (score >=100) {
    myScore.style.fontSize = "45px";
  } else {
    myScore.style.fontSize = "50px";
  }
  
  myScore.textContent = score;
  
}

function enableMouse() { //ENABLE MOUSE EVENTS ON COLORS
  
  red.style.pointerEvents = "auto";
  green.style.pointerEvents = "auto";
  blue.style.pointerEvents = "auto";
  yellow.style.pointerEvents = "auto";
  
}

function disableMouse() { //DISABLE MOUSE EVENTS ON COLORS
  
  red.style.pointerEvents = "none";
  green.style.pointerEvents = "none";
  blue.style.pointerEvents = "none";
  yellow.style.pointerEvents = "none";
  
}

function endGame() {
  
  i = 0;
  sequence = [];
  check = [];
  start.disabled = false;
  end.disabled = true;
  changeScore();
  disableMouse();
  
}