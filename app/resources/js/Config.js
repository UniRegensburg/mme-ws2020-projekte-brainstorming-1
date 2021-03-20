const Config ={
    TEXTBOXDEFAULTTEXT: "Add Your Text!",
    TEXTBOXDEFAULTSIZE: 35,
    TEXTBOXDEFAULTFONT: "Lucida Sans Unicode",
    COLORDEFAULT: "#F3722C",
    COLORCANVAS: "#F5F5F5",
    FREEDRAWBUTTON: document.getElementById("button-freedraw"),
    
};

//for Arrow
function calculateAngle(origX, origY, pointerX, pointerY){

    var vecA1 = (origX-1)*(origY-pointerX), 
    vecB1 = (origY)*(origY-pointerY), 
    vecA2 = ((origX-1)*(origX-1))+((origY)*(origY)), 
    vecB2 = ((origX-pointerX)*(origX-pointerX))+((origY-pointerY)*(origY-pointerY));

    var acos = Math.acos((vecA1+vecB1)/((Math.sqrt(vecA2))*(Math.sqrt(vecB2))));
    return acos*(180/Math.PI);
}

export default Config;
export {calculateAngle};