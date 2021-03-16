/* eslint-env browser */

import Canvas from "./Canvas.js";
import Rect from "./Rect.js";
import Circle from "./Circle.js";
import Textbox from "./Textbox.js";
import Color from "./Color.js";
import FreeDraw from "./FreeDraw.js";
import Config from "./Config.js";
import Arrow from "./Arrow.js";
import Download from "./Download.js";
import Zoom from "./Zoom.js";

var textbox, rect, circle, colorpicker, color, canvas, freedraw, mouse, arrow, download,
zoom, textboxButton, rectButton, circleButton, colorpickerButton, freeDrawButton, mouseButton, arrowButton,
colorButton1, colorButton2, colorButton3, colorButton4, colorButton5, colorButton6, colorButton7, 
downloadButton, zoomInButton, zoomInitButton, zoomOutButton;

function init() {
	//mdc.ripple.MDCRipple.attachTo(document.querySelector('.foo-button'));
	initUI();
}

function initUI(){

	canvas = new Canvas;
	canvas = canvas.drawCanvas();

	color = new Color;

	freedraw = new FreeDraw (true); 
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

	textboxButton = document.getElementById("button-textbox");
	textboxButton.addEventListener("click", function(){textbox = new Textbox; textbox.drawTextbox(canvas);});

	mouseButton = document.getElementById("button-mouse");
	mouseButton.addEventListener("click", function(){freedraw.freeDrawing(canvas, Config.COLORDEFAULT, false);});
	
	//freeDrawButton = document.getElementById("button-freedraw");
	freeDrawButton = Config.FREEDRAWBUTTON;
	freeDrawButton.addEventListener("click", function(){freedraw.freeDrawing(canvas, Config.COLORDEFAULT, true);});

	circleButton = document.getElementById("button-circle");
	circleButton.addEventListener("click", function(){circle = new Circle; circle.drawCircle(canvas);});

	rectButton = document.getElementById("button-rect");
	rectButton.addEventListener("click", function(){rect = new Rect; rect.drawRect(canvas);});

	arrow = new Arrow;

	arrowButton = document.getElementById("button-arrow");
	arrowButton.addEventListener("click", function(){arrow.drawArrow(canvas);});

	downloadButton = document.getElementById("button-download");
	// if-Abfrage wg. Problem mit UI-Element button-download, später entfernen
	if(downloadButton) {
		downloadButton.addEventListener("click", function(){
			download = new Download; 
			download.startDownlad(canvas);
		});
	}

	zoom = new Zoom;
	zoomInButton = document.getElementById("button-zoom-in");
	zoomInitButton = document.getElementById("button-zoom-init");
	zoomOutButton = document.getElementById("button-zoom-out");
	zoom.enableZoom(zoomInButton, zoomInitButton, zoomOutButton, canvas);
}

init();

