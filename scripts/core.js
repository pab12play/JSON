'use-strict'

var dictionary = {};

function addValues(){
	var llave = document.getElementById("llave").value;
	var valor = document.getElementById("valor").value;
	dictionary[llave] = valor;
	printJSON();
}

function printJSON(){
	var string = '{<br>'
	for(var key in dictionary){
		string += '\t"'+key+'":"'+dictionary[key]+'"<br>';
	}
	string += '}'
	document.getElementById("format").innerHTML=string;
}

window.onload = function(){
	var button = document.getElementById("Add");
	button.addEventListener("click",addValues);
};