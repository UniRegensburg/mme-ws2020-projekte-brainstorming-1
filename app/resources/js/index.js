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
	backgroundColor: '#e3e3e3'
});

rect = new fabric.Rect({
	left: 100,
	top: 100,
	fill: "red",
	width: 20,
	height: 20
  });

canvas.add(rect);

canvas.renderAll();
init();

