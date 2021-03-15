/* eslint-env browser */
import Canvas from "./Canvas.js";
import Rect from "./Rect.js";
import Circle from "./Circle.js";
import Textbox from "./Textbox.js";
import Color from "./Color.js";
import FreeDraw from "./FreeDraw.js";
import Config from "./Config.js";
import Arrow from "./Arrow.js";

var textbox, rect, circle, colorpicker, color, canvas, freedraw, mouse, arrow,
textboxButton, rectButton, circleButton, colorpickerButton, freeDrawButton, mouseButton, arrowButton,
colorButton1, colorButton2, colorButton3, colorButton4, colorButton5, colorButton6, colorButton7,
circleButton1, circleButton2,
rectButton1, rectButton2,
textboxButton1, textboxButton2, textboxButton3;

function init() {
	//mdc.ripple.MDCRipple.attachTo(document.querySelector('.foo-button'));
	initUI();
}

function initUI(){

	canvas = new Canvas;
	canvas = canvas.drawCanvas();

	color = new Color;

	freedraw = new FreeDraw (false); 
	color.init(freedraw);

	colorpickerButton = document.getElementById("button-colorpicker");
	colorpickerButton.addEventListener("click", function(){color.showMenue();});

	colorButton1 = document.getElementById("button-color-1");
	colorButton2 = document.getElementById("button-color-2");
	colorButton3 = document.getElementById("button-color-3");
	colorButton4 = document.getElementById("button-color-4");
	colorButton5 = document.getElementById("button-color-5");
	colorButton6 = document.getElementById("button-color-6");
	colorButton7 = document.getElementById("button-color-7");

	colorButton1.addEventListener("click", function(){color.selectColor(1, canvas);});
	colorButton2.addEventListener("click", function(){color.selectColor(2, canvas);});
	colorButton3.addEventListener("click", function(){color.selectColor(3, canvas);});
	colorButton4.addEventListener("click", function(){color.selectColor(4, canvas);});
	colorButton5.addEventListener("click", function(){color.selectColor(5, canvas);});
	colorButton6.addEventListener("click", function(){color.selectColor(6, canvas);});
	colorButton7.addEventListener("click", function(){color.selectColor(7, canvas);});

	textbox = new Textbox ("notFilled");

	textboxButton = document.getElementById("button-textbox");
	textboxButton.addEventListener("click", function(){textbox.showMenue(); textbox.drawTextbox(canvas, textbox);});

	textboxButton1 = document.getElementById("button-textbox-1");
	textboxButton2 = document.getElementById("button-textbox-2");
	textboxButton1.addEventListener("click", function(){textbox.setType("notFilled");});
	textboxButton2.addEventListener("click", function(){textbox.setType("filled");});

	mouseButton = document.getElementById("button-mouse");
	mouseButton.addEventListener("click", function(){freedraw.freeDrawing(canvas, Config.COLORDEFAULT, false);});
	
	freeDrawButton = Config.FREEDRAWBUTTON;
	freeDrawButton.addEventListener("click", function(){freedraw.showMenue(freedraw, canvas); 
		freedraw.freeDrawing(canvas, Config.COLORDEFAULT, true);});

	circle = new Circle ("withBorder");

	circleButton = document.getElementById("button-circle");
	circleButton.addEventListener("click", function(){circle.showMenue(); circle.drawCircle(canvas, circle);});

	circleButton1 = document.getElementById("button-circle-1");
	circleButton2 = document.getElementById("button-circle-2");
	circleButton1.addEventListener("click", function(){circle.setType("withBorder");});
	circleButton2.addEventListener("click", function(){circle.setType("filled");});

	rect = new Rect ("withBorder");

	rectButton = document.getElementById("button-rect");
	rectButton.addEventListener("click", function(){rect.showMenue(); rect.drawRect(canvas, rect);});

	rectButton1 = document.getElementById("button-rect-1");
	rectButton2 = document.getElementById("button-rect-2");
	rectButton1.addEventListener("click", function(){rect.setType("withBorder");});
	rectButton2.addEventListener("click", function(){rect.setType("filled");});

	
	arrow = new Arrow;
	arrowButton = document.getElementById("button-arrow");
	arrowButton.addEventListener("click", function(){arrow.drawArrow(canvas);});
}

init();

