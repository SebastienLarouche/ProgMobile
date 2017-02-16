var tempT; 
var tempP;
var selection = "";
var cpt = 3;
var lstH1 = document.getElementsByTagName("H1");
	for(var i = 0; i< lstH1.length;i++)
	{
		lstH1[i].addEventListener("click",change);
	}
function ajouter(){
	var txtTitre = document.getElementById("idTitre").value;
	var txtPar = document.getElementById("idTexte").value;
	console.log(txtTitre + "," + txtPar)
	
	if(txtPar == "" || txtTitre == "")
	{
		alert("Le titre ET le paragraphe doivent avoir un contenu")
	}
	else
	{	
		var divPar = document.getElementById("divParent");
		var newTitre = document.createElement("h1");
		var newPara  = document.createElement("p");
		var f = document.getElementById("form1");
		
		newTitre.innerHTML = txtTitre;
		newTitre.id = cpt; 
		newPara.innerHTML = txtPar;
		newPara.id= "p"+ cpt;cpt++;
		
		divPar.insertBefore(newTitre,f);
		divPar.insertBefore(newP,f);
	}
	var lstH1 = document.getElementsByTagName("H1");
	for(var i = 0; i< lstH1.length;i++)
	{
		lstH1[i].addEventListener("click",change);
	}
}
function change()
{
	var divParent = document.getElementById("divParent");
	if(selection == "")
	{
		document.body.style.cursor = 'help';
		selection = this.id;
		selectionP= "p" + this.id;
		console.log(selectionP);
		tempT = document.getElementById(selection);
		tempP = document.getElementById(selectionP);
		
	}else{
		if(selection != this.id)
		{
			selection = this.id;
			var t = document.getElementById(selection);
			divParent.insertBefore(tempT,t);
			divParent.insertBefore(tempP,t);
		}
		document.body.style.cursor = 'auto';
		selection ="";
	}
}