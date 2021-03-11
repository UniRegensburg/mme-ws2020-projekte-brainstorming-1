import {selectedColor} from "./Color.js";

var isDown, origX, origY, ellipse;

class Circle{

    // from https://stackoverflow.com/questions/34100866/how-to-free-draw-ellipse-using-fabricjs
    drawCircle(canvas){

        canvas.on('mouse:down', function(o){
            var pointer = canvas.getPointer(o.e);
        
            isDown = true;
            origX = pointer.x;
            origY = pointer.y;
        
            ellipse = new fabric.Ellipse({
                left: origX,
                top: origY,
                originX: 'left',
                originY: 'top',
                rx: pointer.x-origX,
                ry: pointer.y-origY,
                angle: 0,
                fill: 'transparent',
                stroke: selectedColor,
                strokeWidth: 3,
            });
            canvas.add(ellipse);
        });

        canvas.on('mouse:move', function(o){
            if (!isDown) return;
            var pointer = canvas.getPointer(o.e);
            var rx = Math.abs(origX - pointer.x)/2;
            var ry = Math.abs(origY - pointer.y)/2;
            if (rx > ellipse.strokeWidth) {
              rx -= ellipse.strokeWidth/2
            }
             if (ry > ellipse.strokeWidth) {
              ry -= ellipse.strokeWidth/2
            }
            ellipse.set({ rx: rx, ry: ry});
            
            if(origX>pointer.x){
                ellipse.set({originX: 'right'});
            } else {
                ellipse.set({originX: 'left'});
            }
            if(origY>pointer.y){
                ellipse.set({originY: 'bottom'});
            } else {
                ellipse.set({originY: 'top'});
            }
            canvas.renderAll();
        });
        
        canvas.on('mouse:up', function(o){
          isDown = false;
          canvas.off('mouse:down');
        });
    }
}

export default Circle;