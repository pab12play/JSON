'use-strict'

var dictionary = {};

function addValues(){
	var llave = document.getElementById("llave").value;
	var valor = document.getElementById("valor").value;
	if(!isNaN(valor)){
		dictionary[llave] = valor;
		document.getElementById("Error").innerHTML="";
		printJSON();
	}else{
		document.getElementById("Error").innerHTML="Error ingrese un n&uacute;mero";
	}
}

function printJSON(){
	var string = '{<br>'
	for(var key in dictionary){
		string += '&nbsp;"'+key+'":"'+dictionary[key]+'"<br>';
	}
	string += '}'
	document.getElementById("format").innerHTML=string;
}

function printXML(){
	var string = '&lt;dictionary&gt;<br>'
	for(var key in dictionary){
		string += '&nbsp;&lt;item '+key+'="'+dictionary[key]+'"&gt;<br>';
	}
	string += '&lt;/dictionary&gt;'
	var display = document.getElementById("format").innerHTML=string;
}

window.onload = function(){
	var button = document.getElementById("Add");
	button.addEventListener("click",addValues);
};