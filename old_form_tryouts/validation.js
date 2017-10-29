setInvalid = function(evt)
{
	evt.srcElement.style.outline="2px solid red";
}
setValid = function(evt)
{
	evt.srcElement.style.outline="2px solid green";
}
var cognome = document.getElementById("cognome");
var nome = document.getElementById("nome");
var data = document.getElementById("data");
var comune = document.getElementById("comune");
var cf = document.getElementById("cf");
