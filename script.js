var red = document.getElementById("red"),
		green = document.getElementById("green"),
		blue = document.getElementById("blue"),
		yellow = document.getElementById("yellow"),
		start = document.getElementById("start"),
		end = document.getElementById("end"),
		randNum = 0,
		sequence = [];
		
red.addEventListener("click", checkSequence(1), false);
green.addEventListener("click", checkSequence(2), false);
blue.addEventListener("click", checkSequence(3), false);
yellow.addEventListener("click", checkSequence(4), false);

start.addEventListener("click", chooseColor(), false);
end.addEventListener("click", end(), false);

function randomNum() {
	
	randNum = Math.floor((Math.random() * 4) + 1);
	
}

function chooseColor() {
	
	randomNum(); //GENERATE RANDOM NUMBER
	sequence.push(randNum); //PUSH RANDOM NUMBER TO ARRAY
	
	for (var i = 0; i < sequence.length; i++) { //ITERATE THROUGH SEQUENCE ARRAY
	
		switch(sequence[i]) { //ILLUMINATE COLORS IN SEQUENCE
		
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

function showColor(a){ //MAKE COLORS BLINK
	var b = a;
	
	setTimeout( function(b){
		a.className += "select"}, 1000);
	
	setTimeout( function(b) {
		a.classList.remove("select")}, 500);
	
}

function checkSequence(n) { //CHECK IF INPUT IS IN CORRECT ORDER
	var check = sequence; // SET VAR AS TO NOT MESS WITH ORGINAL ORDER
	
	if (n === check[0]) { //INCREASE SCORE AND REMOVE FIRST INDEX
		
		score++;
		check.shift();
		
	} else { //GAME OVER
		
		end();
		
	}
	
}

function end() {
	
	sequence = [];
	
}