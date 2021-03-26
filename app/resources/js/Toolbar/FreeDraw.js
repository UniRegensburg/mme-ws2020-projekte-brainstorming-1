import {selectedColor} from "./Color.js";
import Config from "../Config.js";
import ConfigUI from "../ConfigUI.js";

var colorDraw;

class FreeDraw{

    showMenue(freeDraw, canvas){
        ConfigUI.RECTMENUE.classList.add("hide");
        ConfigUI.CIRCLEMENUE.classList.add("hide");
        ConfigUI.ARROWMENUE.classList.add("hide");
        ConfigUI.TEXTBOXMENUE.classList.add("hide");
        ConfigUI.FREEDRAWMENUE.classList.remove("hide");
        ConfigUI.COLORMENUE.classList.add("hide");
        ConfigUI.COLORMENUEOBJ.classList.add("hide");

        canvas.discardActiveObject().renderAll();

        ConfigUI.FREEDRAWSLIDEROUTPUT.textContent = "Pen size: " + ConfigUI.FREEDRAWSLIDER.value;
        ConfigUI.FREEDRAWSLIDER.oninput = function() {
            ConfigUI.FREEDRAWSLIDEROUTPUT.innerHTML = "Pen size: " + this.value;
            freeDraw.freeDrawing(canvas, freeDraw, freeDraw.getColor(), true);
          };
    }

    constructor(isActive){
        this.isActive = isActive;
        this.color = Config.COLORDEFAULT;
        this.type = "pen";
    }
    getType(){
        return this.type;
    }

    setType(type){
        this.type = type;
    }

    getColor(){
        return this.color;
    }

    setColor(color){
        this.color = color;
    }

    getIsActive(){
        return this.isActive;
    }

    setIsActive(isActive){
        this.isActive = isActive;
    }

    freeDrawing(canvas, freeDraw, color, isActive){

        canvas.on('mouse:down', function(o){
            ConfigUI.FREEDRAWMENUE.classList.add("hide");});

        colorDraw = color;
        if(selectedColor){colorDraw = selectedColor;}

        if(freeDraw.getType() === "pen"){canvas.freeDrawingBrush.color = colorDraw;}
        else if(freeDraw.getType() === "marker"){canvas.freeDrawingBrush.color = colorDraw + "80";} //80 = 50% transparent
    
        canvas.freeDrawingBrush.width = parseInt(ConfigUI.FREEDRAWSLIDER.value);

        canvas.isDrawingMode = isActive;
    
        this.setIsActive(isActive);
        this.setColor(colorDraw);

    }   
}

export default FreeDraw;