import Config from "./Config.js";

var canvas;

class Canvas{
    
    drawCanvas(){
        canvas = new fabric.Canvas("canvas", {
            height: window.innerHeight,
            width: window.innerWidth,
            backgroundColor: Config.COLORCANVAS,
        });  
        return canvas;
    }

    update(element){
        canvas.add(element);
        canvas.renderAll();
    }
}

export default Canvas;