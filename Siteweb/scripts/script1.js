var lstli  = document.getElementById("le").getElementsByTagName("li");
var nbrRandom = Math.floor((Math.random() * 2));
var picActu = nbrRandom;
var tab = new Array(5);
tab = ['1','2','3','4','5'];


Actualise();


function connect(){
	if (document.getElementById('divConnect').style.display == "none")
		document.getElementById('divConnect').style.display = "block";
	else
		document.getElementById('divConnect').style.display = "none";
}

function surligne(champ, erreur) {
    if(erreur)
    champ.style.backgroundColor = "#fba";
    else
    champ.style.backgroundColor = "";
}

function verifNom(champ){

    if(champ.value.length < 2 || champ.value.length > 15)
    {
        surligne(champ,true);
        return false;
    }
    else {
        surligne(champ, false);
        return true;
    }
}

function verifPrenom(champ){

    if(champ.value.length < 2 || champ.value.length > 15)
    {
        surligne(champ,true);
        return false;
    }
    else {
        surligne(champ, false);
        return true;
    }
}

function verifPseudo(champ){

    if(champ.value.length < 2 || champ.value.length > 15)
    {
        surligne(champ,true);
        return false;
    }
    else {
        surligne(champ, false);
        return true;
    }
}

function verifEmail(champ) {

    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!regex.test(champ.value)) {
        surligne(champ, true);
        return false;
    }
    else {
        surligne(champ, false);
        return true;
    }
}

function verifAge(champ) {
    var age = parseInt(champ.value);
    if(isNaN(age) || age < 18 || age > 35) {
        surligne(champ, true);
        return false;
    }
    else {
        surligne(champ, false);
        return true;
    }
}

function verifForm(f) {
    var pseudoOk = verifNom(f.nom);
    var mailOk = verifEmail(f.email);
    var ageOk = verifAge(f.age);
    if(pseudoOk && mailOk && ageOk)
        return true;
    else {
        alert("Veuillez remplir correctement tous les champs");
    return false;
	}
}

//Ajouter ou retirer un element de la liste
function modifier(){
	if(document.getElementById("lstCI").value !=  "" && checkDejaLa())
	{
		var newli  = document.createElement("li");
		newli.innerHTML = "<li>" + document.getElementById("lstCI").value + "</li>";
	
		document.getElementById("le").appendChild(newli);
		document.getElementById("lstCI").value = ""
		
		for(var i = 0; i< lstli.length; i++)
		{
			lstli[i].addEventListener("click",change);
		}
	}
}
for(var i = 0; i< lstli.length; i++)
{
	lstli[i].addEventListener("click",change);
}
function change(){
	this.parentNode.removeChild(this);
}

//Verifie que l'élément a ajouter n'est pas là
function checkDejaLa()
{
	var dispo = true;
	var valeur = document.getElementById("lstCI").value;
	for(var i = 0; i< lstli.length;i++)
	{
		if(valeur == lstli[i].innerHTML)
		{
			dispo = false;
		}
	}
	return dispo;
}

//place une div random quand la page est actualisé
function Actualise()
{
	document.getElementById("corespondant").style.display = "none";
	document.getElementById("corespondant").src = tab[picActu];
	if (document.getElementById('corespondant').style.display == "none")
		document.getElementById('corespondant').style.display = "inline-block";
	
}