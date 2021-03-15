import Canvas from "./Canvas.js";
import {selectedColor} from "./Color.js";
import Config from "./Config.js";

var arrow, arrowTri, color = Config.COLORDEFAULT, isDown, origX, origY;

class Arrow{
    
    drawArrow(canvas){

        canvas.on('mouse:down', function(o){
            var pointer = canvas.getPointer(o.e);

            if(selectedColor){color = selectedColor;}
        
            isDown = true;
            origX = pointer.x;
            origY = pointer.y;
            
        arrow = new fabric.Line([0,0,0,0], {
            left: origX,
            top: origY,
            stroke: color,});

        arrowTri = new fabric.Triangle({
            left: origX,
            top: origY,
            height:10,
            width:10,
            fill: color,});
        
        canvas.add(arrow);
        canvas.add(arrowTri);
        });

        canvas.on('mouse:move', function(o){
            if (!isDown) return;
            var pointer = canvas.getPointer(o.e);

            //bug: draw arrow from bottom-left to top-right
            
            if(origX>pointer.x){
                arrow.set({ left: Math.abs(pointer.x) });
            }
            if(origY>pointer.y){
                arrow.set({ top: Math.abs(pointer.y) });
            }
            
            arrow.set({ width: Math.abs(origX - pointer.x) });
            arrow.set({ height: Math.abs(origY - pointer.y) });

            arrowTri.set({ top: Math.abs(pointer.y) });
            arrowTri.set({ left: Math.abs(pointer.x) });

            canvas.renderAll();
        });
        
        canvas.on('mouse:up', function(o){
            isDown = false;
            canvas.off('mouse:down');
        });


    }
    
}

export default Arrow;
