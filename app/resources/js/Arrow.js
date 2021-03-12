import Canvas from "./Canvas.js";
import {selectedColor} from "./Color.js";
import Config from "./Config.js";

var arrow;

class Arrow{

    drawArrow(canvas){
        arrow = new fabric.Line([0, 0, 40, 200], {
            left: 170,
            top: 150,
            stroke: 'red'});
        canvas.add(arrow);
    }
    
}

export default Arrow;