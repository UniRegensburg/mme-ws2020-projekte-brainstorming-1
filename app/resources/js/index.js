/* eslint-env browser */

import Canvas from "./Canvas.js";
import Rect from "./Rect.js";
import Circle from "./Circle.js";
import Color from "./Color.js";

var rect, circle, colorpicker, color, canvas, rectButton, circleButton, colorpickerButton, 
colorButton1, colorButton2, colorButton3, colorButton4, colorButton5, colorButton6, colorButton7;

function init() {
	//mdc.ripple.MDCRipple.attachTo(document.querySelector('.foo-button'));
	initUI();
}

function initUI(){

	canvas = new Canvas;
	canvas = canvas.drawCanvas();

	colorpickerButton = document.getElementById("button-colorpicker");
	colorpickerButton.addEventListener("click", function(){colorpicker = new Color; colorpicker.showMenue();});

	colorButton1 = document.getElementById("button-color-1");
	colorButton2 = document.getElementById("button-color-2");
	colorButton3 = document.getElementById("button-color-3");
	colorButton4 = document.getElementById("button-color-4");
	colorButton5 = document.getElementById("button-color-5");
	colorButton6 = document.getElementById("button-color-6");
	colorButton7 = document.getElementById("button-color-7");

	colorButton1.addEventListener("click", function(){color = new Color; color.selectColor(1);});
	colorButton2.addEventListener("click", function(){color = new Color; color.selectColor(2);});
	colorButton3.addEventListener("click", function(){color = new Color; color.selectColor(3);});
	colorButton4.addEventListener("click", function(){color = new Color; color.selectColor(4);});
	colorButton5.addEventListener("click", function(){color = new Color; color.selectColor(5);});
	colorButton6.addEventListener("click", function(){color = new Color; color.selectColor(6);});
	colorButton7.addEventListener("click", function(){color = new Color; color.selectColor(7);});

	circleButton = document.getElementById("button-circle");
	circleButton.addEventListener("click", function(){circle = new Circle; circle.drawCircle(canvas);});

	rectButton = document.getElementById("button-rect");
	rectButton.addEventListener("click", function(){rect = new Rect; rect.drawRect(canvas);});
}

init();

