import {selectedColor} from "./Color.js";
import Config from "./Config.js";

var isDown, origX, origY, rectangle, color = Config.COLORDEFAULT;

class Rect{

    // from https://jsfiddle.net/wcwabpwc/
    drawRect(canvas){

        canvas.on('mouse:down', function(o){
            var pointer = canvas.getPointer(o.e);

            if(selectedColor){color = selectedColor;}
        
            isDown = true;
            origX = pointer.x;
            origY = pointer.y;
        
            rectangle = new fabric.Rect({
                left: origX,
                top: origY,
                fill: 'transparent',
                stroke: color,
                strokeWidth: 3,
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
        });
    }
}

export default Rect;