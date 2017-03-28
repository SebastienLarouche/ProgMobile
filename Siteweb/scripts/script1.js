var lstli  = document.getElementById("le").getElementsByTagName("li");
var nbrRandom = Math.floor((Math.random() * 5) + 1);
var nbr = nbrRandom;
var currentDiv;
Actualise();

//affiche la div de connection
/*function connect(){
	if (document.getElementById('divConnect').style.display == "none")
		document.getElementById('divConnect').style.display = "block";
	else
		document.getElementById('divConnect').style.display = "none";
}*/

//surligne lors d'un oubli d'élément
function surligne(champ, erreur) {
    if(erreur)
    champ.style.backgroundColor = "#fba";
    else
    champ.style.backgroundColor = "";
}

//Vérifie les textes des inputs
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
function verifPassword(champ){

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

function CverifPassword(champ){

    var checkup = document.getElementById('password').value;
    var Tcheck = champ.value;

    if(Tcheck != checkup)
    {
        surligne(champ,true);
        return false
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

//Vérifie l'Email
function verifEmail(champ) {
    var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\0-9]+\.)+[a-zA-Z]{2,}))$/;

    if(!regex.test(champ.value)) {
        surligne(champ, true);
        return false;
    }
    else {
        surligne(champ, false);
        return true;
    }
}

//Vérifir l'âge 
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
	var pseudoOk = verifPseudo(f.pseudo);
	var nomOk = verifNom(f.nom);
	var passOk = verifPassword(f.pass);
	var verifOk = CverifPassword(f.Cpass);
	var prenOk = verifPrenom(f.pren);
    var mailOk = verifEmail(f.email);
    var ageOk = verifAge(f.age);
    if(pseudoOk && passOk && verifOk && nomOk && prenOk && mailOk && ageOk)
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
//suprime l'element sur le click
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
	var lstPhrase = document.getElementsByClassName('phrase');

    for(var i = 0; i < lstPhrase.length; i++)
    {
        lstPhrase[i].innerHTML = " ";
    }
	currentDiv = "div"+nbrRandom;
	document.getElementById(currentDiv).style.display = "inline-block";
}

//Cache la div active et en affiche une nouvelle
function mix()
{	
	var lstPhrase = document.getElementsByClassName('phrase');

    for(var i = 0; i < lstPhrase.length; i++)
    {
        lstPhrase[i].innerHTML = " ";
    }
	document.getElementById("div" + nbr).style.display = "none";
	nbrRandom = Math.floor((Math.random() * 5) + 1);
	nbr = nbrRandom;
	currentDiv = "div"+nbrRandom;
	if (document.getElementById(currentDiv).style.display == "none");
		document.getElementById(currentDiv).style.display = "inline-block";
}
function envoyer()
{
	var lstChat = document.getElementsByClassName('chat');

    for(var i = 0; i < lstChat.length; i++)
    {
        lstChat[i].value = "";
    }

    var lstPhrase = document.getElementsByClassName('phrase');

    for(var i = 0; i < lstPhrase.length; i++)
    {
        lstPhrase[i].innerHTML = "Envoye";
    }
}