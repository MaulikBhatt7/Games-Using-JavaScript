var image=document.getElementById("imageOfSnake");
var food=document.getElementById("foodOfSnake");
var left=500
var t=200
var l,r,u,d,food,foodLeft,foodTop,pos_x1,pos_y1,pos_x2,pos_y2,flag,t1,l1;
var lifeCount=3,scoreCount=0;
var imgGameOver = `<img style=margin:150px src="https://media.istockphoto.com/vectors/game-over-icon-for-ui-game-vector-id523895845?k=6&m=523895845&s=612x612&w=0&h=cDIBZSj6kvGiRHuST3MfWH-kqxtjOP7ititEMxKfPlM=">`
var life=document.getElementById("lifeCount");
var score=document.getElementById("score");
function startGoingLeft(){
	clearInterval(d);
	clearInterval(u);
	clearInterval(r);
	 l=setInterval(goingLeft,10);
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
	r=setInterval(goingRight,10);
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
	u=setInterval(goingUp,10);
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
	d=setInterval(goingDown,10);
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
	if(lifeCount<0){
		document.write(imgGameOver);
		clearInterval(l);
		clearInterval(d);
		clearInterval(u);
		clearInterval(r);
	}
		life.innerHTML=lifeCount
}





