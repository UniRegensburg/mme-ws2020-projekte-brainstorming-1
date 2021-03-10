/* eslint-env browser */

//import { Canvas } from "fabric/fabric-impl";
import Canvas from "./canvas.js";
import Rect from "./rectangle.js";

var rect;
let canvas, rectButton;

function init() {
	let outputElement = document.querySelector("div");
	//outputElement.innerHTML = "It works!";
	console.log('Test');
	//mdc.ripple.MDCRipple.attachTo(document.querySelector('.foo-button'));
	initUI();
}

function initUI(){

	canvas = new Canvas;
	canvas.drawCanvas();

	rectButton = document.getElementById("button-rect");
	rectButton.addEventListener("click", function(){rect = new Rect; rect.drawRect('red');}
	);
}

/*
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
canvas.add(rect);*/

init();

