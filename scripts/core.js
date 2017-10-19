'use-strict'

var dictionary = {};

function addValues(){
	var llave = document.getElementById("llave").value;
	var valor = document.getElementById("valor").value;
	dictionary[llave] = valor;
}

function printJSON(){
	var string = '{<br>"diccionario":[<br>'
	for(var llave in dictionary){
		var valor = dictionary[llave];
		var tipo = "String";
		if(!isNaN(valor)){
			tipo = "Number";
		}else if(valor=="true"||valor=="false"){
			tipo = "Bool";
		}
		string += '{"llave":"'+llave+'",<br>"valor":"'+valor+'",<br>"tipo":"'+tipo+'"},<br>';
	}
	string = string.slice(0,string.length-5);
	string += "<br>";
	string += '   ]<br>}'
	document.getElementById("format").innerHTML=string;
}

function printXML(){
	var string = '&lt;dictionary&gt;<br>'
	for(var llave in dictionary){
		var valor = dictionary[llave];
		var tipo = "String";
		if(!isNaN(valor)){
			tipo = "Number";
		}else if(valor=="true"||valor=="false"){
			tipo = "Bool";
		}
		string += '&lt;element&gt;<br>';
		string += '&lt;llave&gt;'+llave+'&lt;/llave&gt;<br>';
		string += '&lt;tipo&gt;'+tipo+'&lt;/tipo&gt;<br>';
		string += '&lt;valor&gt;'+valor+'&lt;/valor&gt;<br>';
		string += '&lt;/element&gt;<br>';
	}
	string += '&lt;/dictionary&gt;'
	document.getElementById("format").innerHTML=string;
}

window.onload = function(){
	var button = document.getElementById("Add");
	button.addEventListener("click",addValues);
};