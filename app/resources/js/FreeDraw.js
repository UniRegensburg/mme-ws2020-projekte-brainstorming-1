import {selectedColor} from "./Color.js";
import Config from "./Config.js";

var freeDrawButton = Config.FREEDRAWBUTTON,
defaultColor = Config.COLORDEFAULT,
isActive, color1;
//color;

class FreeDraw{

    constructor(isActive){
        this.isActive = isActive;
    }

    getIsActive(){
        return this.isActive;
    }

    setIsActive(isActive){
        this.isActive = isActive;
    }

    freeDrawing(canvas, color, isActive){
        
        color1 = color;
        if(selectedColor){color1 = selectedColor;}
    
        canvas.isDrawingMode = isActive;
    
        canvas.freeDrawingBrush.color = color1;
        canvas.freeDrawingBrush.width = 10;

        this.setIsActive(isActive);
    }   
}

export default FreeDraw;