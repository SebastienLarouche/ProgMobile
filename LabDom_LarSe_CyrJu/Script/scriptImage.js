window.onload = choixIma;
var numIma;
var myImages = ["Script/images/image1.jpg","Script/images/image2.jpg","Script/images/image3.jpg","Script/images/image4.jpg","Script/images/image5.jpg","Script/images/image6.jpg"];

function choixIma(){
	var rdmNbr = Math.floor(Math.random() * myImages.length);
	numIma = rdmNbr;
	document.querySelector("#monIma").src = myImages[numIma]; 
}


function precedent(){
	numIma -= 1;
	if(numIma < 0){
		numIma = 6;
	}
	document.querySelector("#monIma").src = myImages[numIma];
}
function suivant(){
	numIma += 1;
	if (numIma > 5){
		numIma = 0;
	}
	document.querySelector("#monIma").src = myImages[numIma];
}