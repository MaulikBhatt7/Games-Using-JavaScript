var image=document.getElementById("imageOfSnake");
var food=document.getElementById("foodOfSnake");
var left=500
var t=200
var l,r,u,d,food,foodLeft,foodTop,pos_x1,pos_y1,pos_x2,pos_y2,flag,t1,l1;
var lifeCount=3,scoreCount=0;
var imgGameOver = `<img style=margin:150px src="https://media.istockphoto.com/vectors/game-over-icon-for-ui-game-vector-id523895845?k=6&m=523895845&s=612x612&w=0&h=cDIBZSj6kvGiRHuST3MfWH-kqxtjOP7ititEMxKfPlM=">`
var life=document.getElementById("lifeCount");
var score=document.getElementById("score");
var flagR=true,flagL=true,flagU=true;flagD=true;
const audioRight=new Audio();
	audioRight.src="rightMusic.wav";

	const audioWrong=new Audio();
	audioWrong.src="wrongMusic.wav";
function startGoingLeft(){
	clearInterval(d);
	clearInterval(u);
	clearInterval(r);
	if(flagL){
		flagL=false;
		flagR=true;
		flagD=true;
		flagU=true;
	 l=setInterval(goingLeft,10);
	}
}

function goingLeft(){
	checkMatchingPosition()
	left--;
	if(left<=415){
		checkBoundry();
	}
	image.style.left=left+"px";
	image.style.transform="rotate(0deg)";
}

function startGoingRight(){
	clearInterval(d);
	clearInterval(l);
	clearInterval(u);
	if(flagR){
		flagR=false;
		flagD=true;
		flagL=true;
		flagU=true;
		r=setInterval(goingRight,10);
	}
	
}

function goingRight(){
	checkMatchingPosition()
	left++;
	if(left>=900){
		checkBoundry();
	}
	image.style.left=left+"px";
	image.style.transform="scaleX(-1)";	
}

function startGoingUp(){
	clearInterval(d);
	clearInterval(l);
	clearInterval(r);
	if(flagU){
		flagU=false;
		flagR=true;
		flagL=true;
		flagD=true;
		u=setInterval(goingUp,10);
	}
}

function goingUp(){
	checkMatchingPosition()
	t--;
	if(t<=170){
		checkBoundry();
	}
	image.style.top=t+"px";
	image.style.transform="rotate(90deg)";
}

function startGoingDown(){
	clearInterval(u);
	clearInterval(l);
	clearInterval(r);
	if(flagD){
		flagD=false;
		flagR=true;
		flagL=true;
		flagU=true;
		d=setInterval(goingDown,10);
	}
}

function goingDown(){
	checkMatchingPosition()
	t++;
	if(t>=630){
		checkBoundry();
	}
	image.style.top=t+"px";
	image.style.transform="rotate(270deg)";
}

function changeLocationOfFood(){
	var food=document.getElementById("foodOfSnake");
	foodTop=Math.random()*600+200;
	foodLeft=Math.random()*600+450;
	console.log(foodTop)
		if(foodLeft<900 && foodTop<700){
			food.style.top=foodTop+"px";
			food.style.left=foodLeft+"px";
		}
		else{
			changeLocationOfFood();
		}
		
}



function checkMatchingPosition(){
	t1=parseInt(foodTop)
	l1=parseInt(foodLeft) 
	 	if(left<=l1+50 && left>=l1-50 && t<=t1+50 && t>=t1-50 ){
	 		audioRight.play()
	 		scoreCount++;
	 		score.innerHTML=scoreCount;
	 		changeLocationOfFood();
	 	}	 	

}
function moveControl(event){
	if(event.keyCode==37){
		startGoingLeft();
	}
	else if(event.keyCode==38){
		startGoingUp();
	}
	else if(event.keyCode==39){
		startGoingRight();
	}
	else if(event.keyCode==40){
		startGoingDown();
	}
}

function checkBoundry(){
	left=500;
	t=200;
	lifeCount--
	audioWrong.play()
	if(lifeCount<0){
		document.write(imgGameOver);
		clearInterval(l);
		clearInterval(d);
		clearInterval(u);
		clearInterval(r);
	}
		life.innerHTML=lifeCount
}











