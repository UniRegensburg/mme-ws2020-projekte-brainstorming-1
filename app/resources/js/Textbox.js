import {selectedColor} from "./Color.js";
import Config from "./Config.js";

var text = Config.TEXTBOXDEFAULTTEXT, 
fontSize = Config.TEXTBOXDEFAULTSIZE,
font = Config.TEXTBOXDEFAULTFONT, 
textbox1, origX, origY,
textboxMenue = document.getElementById("textboxPicker"),
color = Config.COLORDEFAULT, textColor, backgroundColor,
slider = document.getElementById("slider-textbox"),
sliderOutput = document.getElementById("slider-textbox-output");

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

    drawTextbox(canvas, textbox){

        canvas.on('mouse:down', function(o){
            textboxMenue.classList.add("hide");
            
            var pointer = canvas.getPointer(o.e);

            if(selectedColor) {color = selectedColor;}
            //textColor = color;
            if (textbox.getType() === "notFilled") {textColor = color; backgroundColor = "transparent";}
            else if (textbox.getType() === "filled") {textColor = "#EEEEEE"; backgroundColor = color;}
        
            origX = pointer.x;
            origY = pointer.y;

            textbox1 = new fabric.Textbox(text, {
                fontSize: slider.value, 
                fontFamily: font, 
                left: origX - 260/2, 
                top: origY, 
                width: 260,
                backgroundColor: backgroundColor,
                fill: textColor,
                });

            canvas.add(textbox1);

        });

        canvas.on('mouse:up', function(o){
            canvas.off('mouse:down');
        });
    }
}

export default Textbox;