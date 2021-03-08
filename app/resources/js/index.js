/* eslint-env browser */

function init() {
	let outputElement = document.querySelector("div");
	//outputElement.innerHTML = "It works!";
	console.log('Test');
	mdc.ripple.MDCRipple.attachTo(document.querySelector('.foo-button'));
}

const canvas = new fabric.Canvas('canvas', {
	height: 2000,
	width: 2000,
	backgroundColor: '#e3e3e3'

});

canvas.renderAll();
init();

