

function clearText(){
	document.querySelector("textarea").value = "";
}
function calcul(){
	document.querySelector("textarea").value = eval(document.querySelector("textarea").value);
}

function add(carac){
	document.querySelector("textarea").value += carac;
	
}