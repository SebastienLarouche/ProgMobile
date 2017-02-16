var nbr = document.querySelector("textarea").innerHTML;

function calcul(){
	document.querySelector("p").innerHTML = "";
	for (var x = 1; x < 10; x++){
		var resultat = (x * document.querySelector("textarea").value);
		document.querySelector("p").innerHTML = document.querySelector("p").innerHTML + (x + " * " + document.querySelector("textarea").value + " = " + resultat) + "<br>";
	}
}