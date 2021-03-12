import {selectedColor} from "./Color.js";
import Config from "./Config.js";

var text = Config.TEXTBOXDEFAULTTEXT, 
fontSize = Config.TEXTBOXDEFAULTSIZE,
font = Config.TEXTBOXDEFAULTFONT, 
textbox, origX, origY;

class Textbox{

    drawTextbox(canvas){

        canvas.on('mouse:down', function(o){
            var pointer = canvas.getPointer(o.e);

            //if(selectedColor){color = selectedColor;}
        
            origX = pointer.x;
            origY = pointer.y;
        
            textbox = new fabric.Textbox(text, {
                fontSize: fontSize, 
                fontFamily: font, 
                left: origX - 260/2, 
                top: origY, 
                width: 260});

            canvas.add(textbox);
        });

        canvas.on('mouse:up', function(o){
            canvas.off('mouse:down');
        });
    }
}

export default Textbox;