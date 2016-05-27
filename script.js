var red = document.getElementById("red"),
		green = document.getElementById("green"),
		blue = document.getElementById("blue"),
		yellow = document.getElementById("yellow"),
		start = document.getElementById("start"),
		end = document.getElementById("end"),
		randNum = 0,
		coutner = 0,
		score = 0,
		sequence = [];
		
red.addEventListener("click", checkSequence(1), false);
green.addEventListener("click", checkSequence(2), false);
blue.addEventListener("click", checkSequence(3), false);
yellow.addEventListener("click", checkSequence(4), false);

start.addEventListener("click", chooseColor, false);
end.addEventListener("click", endGame, false);

end.disabled = true;

function randomNum() {
	
	randNum = Math.floor((Math.random() * 4) + 1);
	
}

function chooseColor() {
	counter = 1;

	for (var i = 0; i < counter; i++) {
	
		start.disabled = true;
		end.disabled = false;
		randomNum(); //GENERATE RANDOM NUMBER
		sequence.push(randNum); //PUSH RANDOM NUMBER TO ARRAY
		
		for (var j = 0; j < sequence.length; j++) { //ITERATE THROUGH SEQUENCE ARRAY
		
			switch(sequence[j]) { //ILLUMINATE COLORS IN SEQUENCE
			
				case 1: //1 = red
					showColor(red);
					break;
				case 2: //2 = green
					showColor(green);
					break;
				case 3: //3 = blue
					showColor(blue);
					break;
				case 4: //4 = yellow
					showColor(yellow);
					break;
					
			}
		
		}
	}
	
	counter++;
	
}

function showColor(a){ //MAKE COLORS APPEAR "ON"

	a.className += " select";
	
}

function removeColor(b) { //MAKE COLORS APPEAR "OFF"
	
	b.classList.remove("select");
	
}

function checkSequence(n) { //CHECK IF INPUT IS IN CORRECT ORDER
	var check = sequence; // SET VAR AS TO NOT MESS WITH ORGINAL ORDER
	
	for (var i = 0; i < check.length; i++) {
	
		if (n === check[i]) { //INCREASE SCORE AND REMOVE FIRST INDEX
			
			score++;
			check.shift();
			
		} else { //WRONG CHOICE = GAME OVER!
			
			endGame();
			
		}
	}
	
	chooseColor;
	
}

function endGame() {
	
	sequence = [];
	counter = 1;
	start.disable = false;
	end.disable = true;
	
}