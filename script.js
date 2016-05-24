var red = document.getElementById("red"),
		green = document.getElementById("green"),
		blue = document.getElementById("blue"),
		yellow = document.getElementById("yellow"),
		randNum = 0;
		sequence = [];
		
red.addEventListener("click", function(){}, false);
green.addEventListener("click", function(){}, false);
blue.addEventListener("click", function(){}, false);
yellow.addEventListener("click", function(){}, false);

start.addEventListener("click", chooseColor(), false);
end.addEventListener("click", end(), false);

function randomNum() {
	
	randNum = Math.floor((Math.random() * 4) + 1);
	
}

function chooseColor() {
	var timer = setTimeout(showColor(), 1000);
	
	randomNum();
	
	switch(randNum) {
		case 1: //red
			showColor(red);
			break;
		case 2: //green
			showColor(green);
			break;
		case 3: //blue
			showColor(blue);
			break;
		case 4: //yellow
			showColor("yellow");
			break;
	}
	
	sequence.push(randNum);
	
}

function showColor(a){
	
	a.className += "select";
	
}

function checkSequence() {
	
	
	
}

function end() {
	
	sequence = [];
	
}