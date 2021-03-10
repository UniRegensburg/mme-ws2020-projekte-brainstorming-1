import Canvas from "./canvas.js";
//import canvas from "./canvas.js";

var rect, c = new Canvas;

class Rect{

    drawRect(color){
        rect = new fabric.Rect({
            left: 200,
            top: 200,
            fill: color,
            width: 100,
            height: 150
        });
        c.update(rect);
    }       
}

export default Rect;