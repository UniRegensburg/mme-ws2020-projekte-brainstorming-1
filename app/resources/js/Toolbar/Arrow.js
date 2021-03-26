/* eslint-disable no-undef */
import {selectedColor} from "./Color.js";
import Config from "../Config.js";
import ConfigUI from "../ConfigUI.js";

// Arrows from Microsoft Word
var pathSingleArrow = "M461 505.844 913.26 505.844 913.26 516.157 461 516.156ZM908.104 495.532 939.042 511.001 908.104 526.469Z",
pathdoubleArrow = "M485.781 676.844 912.26 676.844 912.26 687.157 485.781 687.156ZM490.937 697.469 460 682 490.937 666.531ZM907.104 666.532 938.042 682 907.104 697.469Z",
pathAngledArrow = "M469 786.844 713.177 786.844 713.177 1021.4 708.021 1016.24 921.26 1016.24 921.26 1026.55 702.864 1026.55 702.864 792 708.021 797.156 469 797.156ZM916.104 1005.93 947.042 1021.4 916.104 1036.86Z",
path, arrowDraw, color = Config.COLORDEFAULT, origX, origY,
arrowMenue = ConfigUI.ARROWMENUE; 

class Arrow {
    
    showMenue(canvas){
        ConfigUI.RECTMENUE.classList.add("hide");
        ConfigUI.CIRCLEMENUE.classList.add("hide");
        ConfigUI.ARROWMENUE.classList.remove("hide");
        ConfigUI.TEXTBOXMENUE.classList.add("hide");
        ConfigUI.FREEDRAWMENUE.classList.add("hide");
        ConfigUI.COLORMENUE.classList.add("hide");
        ConfigUI.COLORMENUEOBJ.classList.add("hide");

        canvas.discardActiveObject().renderAll();
    }

    constructor(type){
        this.type = type;
    }

    setType(type){
        this.type = type;
    }

    getType(){
        return this.type;
    }

    drawArrow(canvas, arrow, pan){
        
        /*
        var arrow = new fabric.Path(pathSingleArrow);
        arrow.set({fill: "blue", top:200, left:200});
        canvas.add(arrow.scale(0.5));*/

        canvas.on('mouse:down', function(o){
            arrowMenue.classList.add("hide");
            
            var pointer = canvas.getPointer(o.e);

            if(selectedColor) {color = selectedColor;}

            if (arrow.getType() === "single") {path = pathSingleArrow;}
            else if (arrow.getType() === "double") {path = pathdoubleArrow;}
            else if (arrow.getType() === "angled") {path = pathAngledArrow;}

            origX = pointer.x;
            origY = pointer.y;

            arrowDraw = new fabric.Path(path);
            arrowDraw.set({fill: color, top: origY, left: origX - 120});

            canvas.add(arrowDraw.scale(0.5));

        });

        canvas.on('mouse:up', function(o){
            canvas.off('mouse:down');
            pan.enablePan(canvas);
        });
    }
    
}

export default Arrow;
