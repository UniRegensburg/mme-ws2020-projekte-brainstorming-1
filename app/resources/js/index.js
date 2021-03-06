/* eslint-env browser */

function init() {
	let outputElement = document.querySelector("div");
	//outputElement.innerHTML = "It works!";
	console.log('Test');
}



const canvas = new fabric.Canvas('canvas', {
	height: 500,
	width: 500,
	backgroundColor: 'red'

});

canvas.renderAll();
init();

