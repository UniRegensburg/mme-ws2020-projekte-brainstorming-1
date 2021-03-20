/* eslint-disable no-undef */
import {selectedColor} from "./Color.js";
import Config from "../Config.js";
import {calculateAngle} from "../Config.js";

var arrow, arrowTri, color = Config.COLORDEFAULT, isDown, origX, origY, angle;

class Arrow{
    
    drawArrow(canvas, pan){

        canvas.on('mouse:down', function(o){
            var pointer = canvas.getPointer(o.e);

            if(selectedColor){color = selectedColor;}
        
            isDown = true;
            origX = pointer.x;
            origY = pointer.y;
        
        arrow = new fabric.Line([0,0,0,0], {
            left: origX,
            top: origY,
            stroke: color,
            strokeWidth: 2,
            });

        arrowTri = new fabric.Triangle({
            left: origX,
            top: origY,
            height: 16,
            width: 16,
            fill: color,
            angle: -30,
            });

        canvas.add(arrow);
        canvas.add(arrowTri);
        });

        canvas.on('mouse:move', function(o){
            if (!isDown) return;
            var pointer = canvas.getPointer(o.e);

            //bug: draw arrow from bottom-left to top-right
            
            if(origX>pointer.x){
                arrow.set({ left: Math.abs(pointer.x) });
                arrow.flipX = true;            
            }
            if(origY>pointer.y){
                arrow.set({ top: Math.abs(pointer.y) });
                arrow.flipY = true;
            }
            
            arrow.set({ width: Math.abs(origX - pointer.x) });
            arrow.set({ height: Math.abs(origY - pointer.y) });

            arrowTri.set({ top: Math.abs(pointer.y) });
            arrowTri.set({ left: Math.abs(pointer.x) });

            //angle = calculateAngle(424, 376, 226, 232);
            angle = calculateAngle(origX, origY, pointer.x, pointer.y);
           
           // console.log(Math.abs(parseInt(angle)));
            arrowTri.set({angle: Math.abs(parseInt(-angle))});
            
            canvas.renderAll();
        });
        
        canvas.on('mouse:up', function(o){
            isDown = false;
            canvas.off('mouse:down');
            pan.enablePan(canvas);
        });

    }
    
}

export default Arrow;
