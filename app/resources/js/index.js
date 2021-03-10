/* eslint-env browser */

var rect;

function init() {
	let outputElement = document.querySelector("div");
	//outputElement.innerHTML = "It works!";
	console.log('Test');
	mdc.ripple.MDCRipple.attachTo(document.querySelector('.foo-button'));
}

const canvas = new fabric.Canvas('canvas', {
	height: window.innerHeight,
	width: window.innerWidth,
	backgroundColor: '#F5F5F5'
});

rect = new fabric.Rect({
	left: 100,
	top: 100,
	fill: '#FF5722',
	width: 100,
	height: 150
  });

canvas.add(rect);

canvas.renderAll();
init();

