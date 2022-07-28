let player1 = document.getElementById("player1");
let icon = document.getElementById("icon");
let dice = document.getElementById("dice")
let initialId=0;
let temp
let iconRed = document.getElementById("redIcon")
let step = new Audio()
step.src = "Step.ogg";
step.playbackRate=12;

for(id=1;id<=72;id++){
	if(id==2 || id==15 || id==28 || id==41){
		continue;
	}
	box = document.getElementById(id);
	box.style.backgroundColor = "white";
}

console.log(box1.value)

function sleep(milliseconds) {
     return new Promise(resolve => setTimeout(resolve, milliseconds));
 }

 function move(){
	console.log(dice.value)
		
		initialId++;
		str2=`div${initialId}`
			str3=`div${initialId-1}`
		
		console.log(initialId)
		currentTd=document.getElementById(initialId)
		newPlace = document.createElement("div");
		image = newPlace.insertAdjacentHTML("afterBegin", `<img width="50%" height="50%" class="imageAt${initialId}" src="Ludo Icon.jpg">`);
		console.log(newPlace)
		
		

		newPlace.setAttribute("id",str2);
		currentTd.appendChild(newPlace);
		step.play();
		// console.log(newPlace)
		PevTd=document.getElementById(str3)
		// console.log(PevTd)
		if(PevTd!=null){
			PevTd.classList.add("hide")
		}
	
}
async function start(){
	for(i=1;i<=dice.value;i++){
		move()
		await sleep(500);
	}
}
