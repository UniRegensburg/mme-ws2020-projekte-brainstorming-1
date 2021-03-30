/* eslint-env browser */
/* eslint-disable no-undef */
import Canvas from "./utilis/canvas.js";
import Rect from "./tools/rect.js";
import Circle from "./tools/circle.js";
import Textbox from "./tools/textbox.js";
import Color from "./tools/color.js";
import FreeDraw from "./tools/freeDraw.js";
import Config from "./utilis/config.js";
import Arrow from "./tools/arrow.js";
import Download from "./tools/download.js";
import Zoom from "./tools/zoom.js";
import Pan from "./tools/pan.js";
import ObjectMenue from "./objectMenue.js";
import {Instance, Connect} from "./utilis/client.js";
import Image from "./tools/image.js";

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
	
	Config.COLORPICKERBUTTON.addEventListener("click", function(){color.showMenue(canvas);});
	Config.COLORBUTTON1.addEventListener("click", function(){color.selectColor(1, canvas, freeDraw);});
	Config.COLORBUTTON2.addEventListener("click", function(){color.selectColor(2, canvas, freeDraw);});
	Config.COLORBUTTON3.addEventListener("click", function(){color.selectColor(3, canvas, freeDraw);});
	Config.COLORBUTTON4.addEventListener("click", function(){color.selectColor(4, canvas, freeDraw);});
	Config.COLORBUTTON5.addEventListener("click", function(){color.selectColor(5, canvas, freeDraw);});
	Config.COLORBUTTON6.addEventListener("click", function(){color.selectColor(6, canvas, freeDraw);});
	Config.COLORBUTTON7.addEventListener("click", function(){color.selectColor(7, canvas, freeDraw);});
	Config.COLORBUTTON8.addEventListener("click", function(){color.selectColor(8, canvas, freeDraw);});
	Config.COLORBUTTON9.addEventListener("click", function(){color.selectColor(9, canvas, freeDraw);});
	Config.COLORBUTTON10.addEventListener("click", function(){color.selectColor(10, canvas, freeDraw);});

	Config.TEXTBOXBUTTON.addEventListener("click", function(){pan.disablePan(canvas); textbox.showMenue(canvas); textbox.drawTextbox(canvas, textbox, pan); freeDraw.freeDrawing(canvas, freeDraw, Config.COLORDEFAULT, false);});
	Config.TEXTBOXBUTTON1.addEventListener("click", function(){textbox.setType("notFilled");});
	Config.TEXTBOXBUTTON2.addEventListener("click", function(){textbox.setType("filled");});

	Config.MOUSEBUTTON.addEventListener("click", function(){pan.enablePan(canvas); freeDraw.freeDrawing(canvas, freeDraw, Config.COLORDEFAULT, false);});
	
	Config.FREEDRAWBUTTON.addEventListener("click", function(){pan.disablePan(canvas); freeDraw.showMenue(freeDraw, canvas); freeDraw.freeDrawing(canvas, freeDraw, Config.COLORDEFAULT, true);});
	Config.FREEDRAWBUTTON1.addEventListener("click", function(){freeDraw.setType("pen"); freeDraw.freeDrawing(canvas, freeDraw, freeDraw.getColor(), true);});
	Config.FREEDRAWBUTTON2.addEventListener("click", function(){freeDraw.setType("marker"); freeDraw.freeDrawing(canvas, freeDraw, freeDraw.getColor(), true);});

	Config.CIRCLEBUTTON.addEventListener("click", function(){pan.disablePan(canvas); circle.showMenue(canvas); circle.drawCircle(canvas, circle, pan); freeDraw.freeDrawing(canvas, freeDraw, Config.COLORDEFAULT, false);});
	Config.CIRCLEBUTTON1.addEventListener("click", function(){circle.setType("withBorder");});
	Config.CIRCLEBUTTON2.addEventListener("click", function(){circle.setType("filled");});

	Config.RECTBUTTON.addEventListener("click", function(){pan.disablePan(canvas); rect.showMenue(canvas); rect.drawRect(canvas, rect, pan); freeDraw.freeDrawing(canvas, freeDraw, Config.COLORDEFAULT, false);});
	Config.RECTBUTTON1.addEventListener("click", function(){rect.setType("withBorder");});
	Config.RECTBUTTON2.addEventListener("click", function(){rect.setType("filled");});

	Config.ARROWBUTTON.addEventListener("click", function(){pan.disablePan(canvas); arrow.showMenue(canvas); arrow.drawArrow(canvas, arrow, pan); freeDraw.freeDrawing(canvas, freeDraw, Config.COLORDEFAULT, false);});
	Config.ARROWBUTTON1.addEventListener("click", function(){arrow.setType("single");});
	Config.ARROWBUTTON2.addEventListener("click", function(){arrow.setType("double");});
	Config.ARROWBUTTON3.addEventListener("click", function(){arrow.setType("angled");});
	
	//timerButton.addEventListener("click", function(){timer.startTimer();});

	downloadButton = document.getElementById("button-download");
	// if-Abfrage wg. Problem mit UI-Element button-download, später entfernen
	
	Config.DOWNLOADBUTTON.addEventListener("click", function(){download = new Download; download.startDownlad(canvas);});

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

	objMenue.isObjMenue(canvas);
	ConfigUI.OBJECTBUTTON1.addEventListener("click", function(){objMenue.showColorMenue(canvas);});
	ConfigUI.OBJECTBUTTON2.addEventListener("click", function(){objMenue.copy(canvas);});
	ConfigUI.OBJECTBUTTON3.addEventListener("click", function(){objMenue.toFront(canvas);});
	ConfigUI.OBJECTBUTTON4.addEventListener("click", function(){objMenue.toBack(canvas);});
	ConfigUI.OBJECTBUTTON5.addEventListener("click", function(){objMenue.delete(canvas);});
}

init();

