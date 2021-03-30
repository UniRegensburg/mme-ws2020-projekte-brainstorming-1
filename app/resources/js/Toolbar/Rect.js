/* eslint-disable no-undef */
import {selectedColor} from "./color.js";
import Config from "../config.js";
import ConfigUI from "../configUI.js";

var isDown, origX, origY, rectangle, color = Config.COLORDEFAULT, fill, stroke;

class Rect{

    showMenue(canvas){
        
        ConfigUI.RECTMENUE.classList.remove("hide");
        ConfigUI.CIRCLEMENUE.classList.add("hide");
        ConfigUI.ARROWMENUE.classList.add("hide");
        ConfigUI.TEXTBOXMENUE.classList.add("hide");
        ConfigUI.FREEDRAWMENUE.classList.add("hide");
        ConfigUI.COLORMENUE.classList.add("hide");
        ConfigUI.COLORMENUEOBJ.classList.add("hide");
        //ConfigUI.OBJECTMENUE.classList.add("hide");

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

    // from https://jsfiddle.net/wcwabpwc/
    drawRect(canvas, rect, pan){

        canvas.on('mouse:down', function(o){

            ConfigUI.RECTMENUE.classList.add("hide");

            var pointer = canvas.getPointer(o.e);

            if(selectedColor) {color = selectedColor;}
            if (rect.getType() === "withBorder") {fill = "transparent"; stroke = 3;}
            else if (rect.getType() === "filled") {fill = color; stroke = 0;}
        
            isDown = true;
            origX = pointer.x;
            origY = pointer.y;
        
            rectangle = new fabric.Rect({
                left: origX,
                top: origY,
                fill: fill,
                stroke: color,
                strokeWidth: stroke,
            });
            canvas.add(rectangle);
        });
        
        canvas.on('mouse:move', function(o){

            if (!isDown) return;
            var pointer = canvas.getPointer(o.e);
            if(origX>pointer.x){
                rectangle.set({ left: Math.abs(pointer.x) });
            }
            if(origY>pointer.y){
                rectangle.set({ top: Math.abs(pointer.y) });
            }
            rectangle.set({ width: Math.abs(origX - pointer.x) });
            rectangle.set({ height: Math.abs(origY - pointer.y) });
            canvas.renderAll();
        });
        
        canvas.on('mouse:up', function(o){
            isDown = false;
            canvas.off('mouse:down');
            pan.enablePan(canvas);
            canvas.fire('object:modified', {target: rectangle});
        });
        
    }
}

export default Rect;