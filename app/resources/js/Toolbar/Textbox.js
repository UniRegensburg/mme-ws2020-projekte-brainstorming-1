import {selectedColor} from "./Color.js";
import Config from "../Config.js";
import ConfigUI from "../ConfigUI.js";

var text = Config.TEXTBOXDEFAULTTEXT, 
//fontSize = Config.TEXTBOXDEFAULTSIZE,
font = Config.TEXTBOXDEFAULTFONT, 
textboxDraw, origX, origY,
color = Config.COLORDEFAULT, textColor, backgroundColor, shadow,
textboxMenue = ConfigUI.TEXTBOXMENUE,
slider = ConfigUI.TEXTBOXSLIDER,
sliderOutput = ConfigUI.TEXTBOXSLIDEROUTPUT;

class Textbox{
    
    showMenue(){
        textboxMenue.classList.remove("hide");
        sliderOutput.textContent = "Text size: " + slider.value;
        slider.oninput = function() {
            sliderOutput.innerHTML = "Text size: " + this.value;
          };
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

    drawTextbox(canvas, textbox, pan){

        canvas.on('mouse:down', function(o){
            textboxMenue.classList.add("hide");
            
            var pointer = canvas.getPointer(o.e);

            if(selectedColor) {color = selectedColor;}
            if (textbox.getType() === "notFilled") {textColor = color; backgroundColor = "transparent"; shadow = "transpatent";}
            else if (textbox.getType() === "filled") {textColor = "#EEEEEE"; backgroundColor = color; shadow = "#9E9E9E 4px 4px 10px";} //shadow: "color, offsetX, offsetY, blur"
        
            origX = pointer.x;
            origY = pointer.y;

            textboxDraw = new fabric.Textbox(text, {
                fontSize: slider.value, 
                fontFamily: font, 
                left: origX - 260/2, 
                top: origY, 
                width: 260,
                backgroundColor: backgroundColor,
                fill: textColor,
                shadow: shadow,
                });

            canvas.add(textboxDraw).setActiveObject(textboxDraw);
            textboxDraw.enterEditing();

        });

        canvas.on('mouse:up', function(o){
            canvas.off('mouse:down');
            pan.enablePan(canvas);
        });
    }
}

export default Textbox;