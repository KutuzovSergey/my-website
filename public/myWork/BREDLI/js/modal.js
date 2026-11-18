"use strict"

var form1 = document.getElementById("form1");
var cancel = document.getElementById("cancel");
var current = document.getElementById("current");
var modal_unit = document.getElementById("modal_unit");


function modal() {
	modal_unit.style.display = 'block';
}
function modal_cal() {
	modal_unit.style.display = 'block';
}
function modal_close() {
	modal_unit.style.display = 'none';
}

form1.addEventListener('click', modal);
current.addEventListener('click', modal_cal);
cancel.addEventListener('click', modal_close);
// modal_unit.addEventListener('click', modal_close);