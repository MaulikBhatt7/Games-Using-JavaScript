const score=document.querySelector('.score');
const startGame=document.querySelector('.startGame');
const gameArea=document.querySelector('.gameArea');
const audio = new Audio();
	audio.src="Lose Music.wav";

startGame.addEventListener('click', start);

let keys = {ArrowUp : false, ArrowDown : false, ArrowLeft : false, ArrowRight : false};
let player={ speed : 5, score : 0 };
document.addEventListener('keydown',keyDown);
document.addEventListener('keyup',keyUp);

function keyDown(e){
	e.preventDefault();
	keys[e.key] = true;
	// console.log(keys);
}
function keyUp(e){
	e.preventDefault();
	keys[e.key]=false;
	// console.log(keys);
}

function isColide(a,b){
	aRect = a.getBoundingClientRect();
	bRect = b.getBoundingClientRect();

	return !((aRect.bottom < bRect.top) || (aRect.top > bRect.bottom) || 
				(aRect.right < bRect.left) || (aRect.left > bRect.right));
}

//for continues movement of lines
function moveLine(){
	let lines=document.querySelectorAll(".lines");
	lines.forEach(element => {

		if(element.y >= 625){
			element.y-=750;
		}

		element.y += player.speed;
		element.style.top = element.y + "px";
	})
}


function moveEnemyCar(car){
	let enemyCar=document.querySelectorAll(".enemyCar");
	enemyCar.forEach(element => {

		if(isColide(car,element)){
			// console.log("Game Over");
			audio.play();
			endGame();
			startGame.innerHTML = "Game Over! <br> Your final score is "+player.score+"<br> Click here to restart the game";
		}

		if(element.y >= 660){
			element.y = -300;
			element.style.left = Math.floor(Math.random()*400)+"px";
		}

		element.y += player.speed;
		element.style.top = element.y + "px";
		
	})
}

function gamePlay(){
	let car=document.querySelector(".car");
	// to get all informnation of road like left,top,xPos,yPos,width,height etc.
	let road=gameArea.getBoundingClientRect();
	// console.log(road);
	// console.log("Game started");
	if(player.start){
		moveLine();
		moveEnemyCar(car);
		if(keys.ArrowUp && player.y>(road.top + 70)){
			player.y-=player.speed;
		}
		else if(keys.ArrowDown && player.y<=(road.height-85)){
			player.y+=player.speed;
		}
		else if(keys.ArrowRight && player.x<(road.width-50)){
			player.x+=player.speed;
		}
		else if(keys.ArrowLeft && player.x>0){
			player.x-=player.speed;
		}
		// console.log(gameArea.offsetLeft);
		car.style.left=player.x+"px";
		car.style.top=player.y+"px";
		window.requestAnimationFrame(gamePlay);
		// console.log(player.score++);
		player.score++;
		finalScore = player.score-1;
		score.innerHTML = "Score : " + finalScore;
	}
}


function start(){
	// gameArea.classList.remove("hide");
	startGame.classList.add("hide");
	gameArea.innerHTML="";

	player.start=true;
	player.score=0;
	window.requestAnimationFrame(gamePlay);

	for(i=0;i<5;i++){
		let roadLine = document.createElement("div");
		roadLine.setAttribute("class","lines");
		roadLine.y=(i*150);
		roadLine.style.top = roadLine.y+"px";
		gameArea.appendChild(roadLine);
	}
	

	let car = document.createElement("div");
	car.setAttribute("class", "car");
	// car.innerText="Hey I'm car.";
	gameArea.appendChild(car);

	player.y=car.offsetTop;
	player.x=car.offsetLeft;

	// console.log(player.x,player.y);

	for(i=0;i<3;i++){
		let enemyCar = document.createElement("div");
		enemyCar.setAttribute("class","enemyCar");
		enemyCar.y=((i+1)*350)*-1;
		enemyCar.style.top = enemyCar.y+"px";
		enemyCar.style.backgroundColor=randomColor();
		enemyCar.style.left = Math.floor(Math.random()*350)+"px";
		gameArea.appendChild(enemyCar);
	}
}

function endGame(){
	player.start=false;
	startGame.classList.remove("hide");
}

function randomColor(){
	function color(){
		let hexDec = Math.floor(Math.random()*256).toString(16);
		return ("0" + String(hexDec)).substr(-2);
	}
	return "#"+color()+color()+color()
}