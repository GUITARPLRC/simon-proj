var red = document.getElementById("red"),
		green = document.getElementById("green"),
		blue = document.getElementById("blue"),
		yellow = document.getElementById("yellow"),
		start = document.getElementById("start"),
		end = document.getElementById("end"),
		randNum = 0,
		score = 0,
		sequence = [],
		check = [],
    i = 0;

start.addEventListener("click", chooseColor, false);
end.addEventListener("click", endGame, false);

red.addEventListener("click", checkSequence(1), false);
green.addEventListener("click", checkSequence(2), false);
blue.addEventListener("click", checkSequence(3), false);
yellow.addEventListener("click", checkSequence(4), false);

red.disabled = true;
green.disabled = true;
blue.disabled = true;
yellow.disabled = true;

end.disabled = true;

function randomNum() {
	
	randNum = Math.floor((Math.random() * 4) + 1);
	
}

function chooseColor() {
	
	randomNum(); //GENERATE RANDOM NUMBER
	sequence.push(randNum); //PUSH RANDOM NUMBER TO ARRAY
		
	(function loop(){
		
			
    switch(sequence[i]) { //ILLUMINATE COLORS IN SEQUENCE
    
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
    
	})(); // end loop function
  
	start.disabled = true;
	end.disabled = false;
  
	check = sequence; // SET TO NOT MESS WITH ORGINAL ORDER
  
  red.disabled = false;
  green.disabled = false;
  blue.disabled = false;
  yellow.disabled = false;
	
}

function showColor(a){ //MAKE COLORS APPEAR "ON"

	a.className += " select";
	
}

function removeColor(b) { //MAKE COLORS APPEAR "OFF"
	
	b.classList.remove("select");
	
}

function checkSequence(n) { //CHECK IF INPUT IS IN CORRECT ORDER
	
	if (n === check[0]) { //INCREASE SCORE AND REMOVE FIRST INDEX
		
		score++;
		check.shift();
    
    if (check.length === 0) {
    
      chooseColor();
      red.disabled = true;
      green.disabled = true;
      blue.disabled = true;
      yellow.disabled = true;
    
    }
		
	} else { //WRONG CHOICE = GAME OVER!
		
		endGame();
		
	}
	
}

function endGame() {
	
  i = 0;
  sequence = [];
	check = [];
	score = 0;
	start.disabled = false;
	end.disabled = true;
	
}