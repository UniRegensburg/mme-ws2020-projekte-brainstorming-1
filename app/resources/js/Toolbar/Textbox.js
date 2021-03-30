/* eslint-disable no-undef */
import {selectedColor} from "./color.js";
import Config from "../config.js";
import ConfigUI from "../configUI.js";

var text = Config.TEXTBOXDEFAULTTEXT, 
//fontSize = Config.TEXTBOXDEFAULTSIZE,
font = Config.TEXTBOXDEFAULTFONT, 
textboxDraw, origX, origY,
color = Config.COLORDEFAULT, textColor, backgroundColor, shadow,
textboxMenue = ConfigUI.TEXTBOXMENUE,
slider = ConfigUI.TEXTBOXSLIDER,
sliderOutput = ConfigUI.TEXTBOXSLIDEROUTPUT;

class Textbox{
    
    showMenue(canvas){
        ConfigUI.RECTMENUE.classList.add("hide");
        ConfigUI.CIRCLEMENUE.classList.add("hide");
        ConfigUI.ARROWMENUE.classList.add("hide");
        ConfigUI.TEXTBOXMENUE.classList.remove("hide");
        ConfigUI.FREEDRAWMENUE.classList.add("hide");
        ConfigUI.COLORMENUE.classList.add("hide");
        ConfigUI.COLORMENUEOBJ.classList.add("hide");

        canvas.discardActiveObject().renderAll();

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
                width: slider.value*8,
                left: origX - (slider.value*8)/2, 
                top: origY, 
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

            //textboxes can not be scaled in height
            textboxDraw.setControlsVisibility({
                mt: false, 
                mb: false, 
            });
        });
    }
}

export default Textbox;