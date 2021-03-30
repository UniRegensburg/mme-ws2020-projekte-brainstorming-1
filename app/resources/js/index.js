/* eslint-env browser */
/* eslint-disable no-undef */
import Canvas from "./Canvas.js";
import Rect from "./Toolbar/Rect.js";
import Circle from "./Toolbar/Circle.js";
import Textbox from "./Toolbar/Textbox.js";
import Color from "./Toolbar/Color.js";
import FreeDraw from "./Toolbar/FreeDraw.js";
import Config from "./Config.js";
import ConfigUI from "./ConfigUI.js";
import Arrow from "./Toolbar/Arrow.js";
import Download from "./Download.js";
import Zoom from "./Zoom.js";
import Pan from "./Pan.js";
import ObjectMenue from "./ObjectMenue.js";
import {Instance, Connect} from "./utilis/Client.js";
import Image from "./Image.js";

var textbox, rect, circle, color, canvas, freeDraw, arrow, download, zoom, pan, timer, image, objMenue,
textboxButton, rectButton, circleButton, colorpickerButton, freeDrawButton, mouseButton, arrowButton,
colorButton1, colorButton2, colorButton3, colorButton4, colorButton5, colorButton6, colorButton7,
circleButton1, circleButton2,
rectButton1, rectButton2,
textboxButton1, textboxButton2,
freeDrawButton1, freeDrawButton2,
downloadButton, zoomInButton, zoomInitButton, zoomOutButton, timerButton, imageUploadButton,
objectMenue = document.getElementById("objectMenue");

function init() {
	eventListeners();
	initUI();
	initClient();
}

function eventListeners(){
	document.addEventListener("RoomConnectEvent", function(e) {
		console.log("connected to room " + e.detail.id);
	}, true);
}

function initClient(){
    Connect("ws://localhost:8001")
}

function initUI(){
	canvas = new Canvas;
	canvas = canvas.drawCanvas();

	zoom = new Zoom;
	pan = new Pan;
	pan.enablePan(canvas);

	color = new Color;
	freeDraw = new FreeDraw (false); 
	textbox = new Textbox ("notFilled");
	circle = new Circle ("withBorder");
	rect = new Rect ("withBorder");
	arrow = new Arrow ("single");
	objMenue = new ObjectMenue;
	
	ConfigUI.COLORPICKERBUTTON.addEventListener("click", function(){color.showMenue(canvas);});
	ConfigUI.COLORBUTTON1.addEventListener("click", function(){color.selectColor(1, canvas, freeDraw);});
	ConfigUI.COLORBUTTON2.addEventListener("click", function(){color.selectColor(2, canvas, freeDraw);});
	ConfigUI.COLORBUTTON3.addEventListener("click", function(){color.selectColor(3, canvas, freeDraw);});
	ConfigUI.COLORBUTTON4.addEventListener("click", function(){color.selectColor(4, canvas, freeDraw);});
	ConfigUI.COLORBUTTON5.addEventListener("click", function(){color.selectColor(5, canvas, freeDraw);});
	ConfigUI.COLORBUTTON6.addEventListener("click", function(){color.selectColor(6, canvas, freeDraw);});
	ConfigUI.COLORBUTTON7.addEventListener("click", function(){color.selectColor(7, canvas, freeDraw);});
	ConfigUI.COLORBUTTON8.addEventListener("click", function(){color.selectColor(8, canvas, freeDraw);});
	ConfigUI.COLORBUTTON9.addEventListener("click", function(){color.selectColor(9, canvas, freeDraw);});
	ConfigUI.COLORBUTTON10.addEventListener("click", function(){color.selectColor(10, canvas, freeDraw);});

	ConfigUI.TEXTBOXBUTTON.addEventListener("click", function(){pan.disablePan(canvas); textbox.showMenue(canvas); textbox.drawTextbox(canvas, textbox, pan); freeDraw.freeDrawing(canvas, freeDraw, Config.COLORDEFAULT, false);});
	ConfigUI.TEXTBOXBUTTON1.addEventListener("click", function(){textbox.setType("notFilled");});
	ConfigUI.TEXTBOXBUTTON2.addEventListener("click", function(){textbox.setType("filled");});

	ConfigUI.MOUSEBUTTON.addEventListener("click", function(){pan.enablePan(canvas); freeDraw.freeDrawing(canvas, freeDraw, Config.COLORDEFAULT, false);});
	
	ConfigUI.FREEDRAWBUTTON.addEventListener("click", function(){pan.disablePan(canvas); freeDraw.showMenue(freeDraw, canvas); freeDraw.freeDrawing(canvas, freeDraw, Config.COLORDEFAULT, true);});
	ConfigUI.FREEDRAWBUTTON1.addEventListener("click", function(){freeDraw.setType("pen"); freeDraw.freeDrawing(canvas, freeDraw, freeDraw.getColor(), true);});
	ConfigUI.FREEDRAWBUTTON2.addEventListener("click", function(){freeDraw.setType("marker"); freeDraw.freeDrawing(canvas, freeDraw, freeDraw.getColor(), true);});

	ConfigUI.CIRCLEBUTTON.addEventListener("click", function(){pan.disablePan(canvas); circle.showMenue(canvas); circle.drawCircle(canvas, circle, pan); freeDraw.freeDrawing(canvas, freeDraw, Config.COLORDEFAULT, false);});
	ConfigUI.CIRCLEBUTTON1.addEventListener("click", function(){circle.setType("withBorder");});
	ConfigUI.CIRCLEBUTTON2.addEventListener("click", function(){circle.setType("filled");});

	ConfigUI.RECTBUTTON.addEventListener("click", function(){pan.disablePan(canvas); rect.showMenue(canvas); rect.drawRect(canvas, rect, pan); freeDraw.freeDrawing(canvas, freeDraw, Config.COLORDEFAULT, false);});
	ConfigUI.RECTBUTTON1.addEventListener("click", function(){rect.setType("withBorder");});
	ConfigUI.RECTBUTTON2.addEventListener("click", function(){rect.setType("filled");});

	ConfigUI.ARROWBUTTON.addEventListener("click", function(){pan.disablePan(canvas); arrow.showMenue(canvas); arrow.drawArrow(canvas, arrow, pan); freeDraw.freeDrawing(canvas, freeDraw, Config.COLORDEFAULT, false);});
	ConfigUI.ARROWBUTTON1.addEventListener("click", function(){arrow.setType("single");});
	ConfigUI.ARROWBUTTON2.addEventListener("click", function(){arrow.setType("double");});
	ConfigUI.ARROWBUTTON3.addEventListener("click", function(){arrow.setType("angled");});
	
	//timerButton.addEventListener("click", function(){timer.startTimer();});

	downloadButton = document.getElementById("button-download");
	// if-Abfrage wg. Problem mit UI-Element button-download, später entfernen
	
	ConfigUI.DOWNLOADBUTTON.addEventListener("click", function(){download = new Download; download.startDownlad(canvas);});

	image = new Image;
	imageUploadButton = document.getElementById("button-image-upload");
	imageUploadButton.addEventListener("click", function() {
		document.querySelector("#uploaded-file").click();
		image.loadImage(canvas);
	});

	zoom = new Zoom;
	zoomInButton = document.getElementById("button-zoom-in");
	zoomInitButton = document.getElementById("button-zoom-init");
	zoomOutButton = document.getElementById("button-zoom-out");
	zoom.enableZoom(zoomInButton, zoomInitButton, zoomOutButton, canvas);

	pan = new Pan;
	pan.enablePan(canvas);

	/*
	canvas.on('selection:updated', function(o){
		showObjMenue();
	});

	canvas.on('selection:created', function(o){
		showObjMenue();
	});

	canvas.on('selection:cleared', function(o){
		objectMenue.classList.add("hide");
		showObjMenue();
		//console.log("hide");
	}); 
	
	canvas.on('object:modified', function(o){
		showObjMenue();
	}); 

	objMenue.isObjMenue(canvas);
	ConfigUI.OBJECTBUTTON1.addEventListener("click", function(){objMenue.showColorMenue(canvas);});
	ConfigUI.OBJECTBUTTON2.addEventListener("click", function(){objMenue.copy(canvas);});
	ConfigUI.OBJECTBUTTON3.addEventListener("click", function(){objMenue.toFront(canvas);});
	ConfigUI.OBJECTBUTTON4.addEventListener("click", function(){objMenue.toBack(canvas);});
	ConfigUI.OBJECTBUTTON5.addEventListener("click", function(){objMenue.delete(canvas);});
	*/
}

init();

