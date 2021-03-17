import {selectedColor} from "./Color.js";
import Config from "./Config.js";

var color1,
slider = document.getElementById("slider-freedraw"),
sliderOutput = document.getElementById("slider-freedraw-output"),
freeDrawMenue = document.getElementById("freeDrawPicker");

class FreeDraw{

    showMenue(freeDraw, canvas){
        freeDrawMenue.classList.remove("hide");

        sliderOutput.textContent = "Pen size: " + slider.value;
        slider.oninput = function() {
            sliderOutput.innerHTML = "Pen size: " + this.value;
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
            freeDrawMenue.classList.add("hide");});

        color1 = color;
        if(selectedColor){color1 = selectedColor;}

        if(freeDraw.getType() === "pen"){canvas.freeDrawingBrush.color = color1;}
        else if(freeDraw.getType() === "marker"){canvas.freeDrawingBrush.color = color1 + "80";} //80 = 50% transparent
    
        canvas.freeDrawingBrush.width = parseInt(slider.value);

        canvas.isDrawingMode = isActive;
    
        this.setIsActive(isActive);
        this.setColor(color1);

    }   
}

export default FreeDraw;