const Config = {

    
  TEXTBOXDEFAULTTEXT: "Add Your Text!",
  TEXTBOXDEFAULTSIZE: 35,
  TEXTBOXDEFAULTFONT: "Lucida Sans Unicode",
  COLORDEFAULT: "#F3722C",
  COLORCANVAS: "#F5F5F5",
  OBJECTMENUE: document.getElementById("objectMenue"),
  OBJECTBUTTON1: document.getElementById("button-objectMenue-1"),
  OBJECTBUTTON2: document.getElementById("button-objectMenue-2"),
  OBJECTBUTTON3: document.getElementById("button-objectMenue-3"),
  OBJECTBUTTON4: document.getElementById("button-objectMenue-4"),
  OBJECTBUTTON5: document.getElementById("button-objectMenue-5"),
  COLORMENUEOBJ: document.getElementById("colorPickerObj"),
  COLORICONOBJ: document.getElementById("icon-colorpicker-obj"),
  COLORBUTTONOBJ1: document.getElementById("button-color-obj-1"),
  COLORBUTTONOBJ2: document.getElementById("button-color-obj-2"),
  COLORBUTTONOBJ3: document.getElementById("button-color-obj-3"),
  COLORBUTTONOBJ4: document.getElementById("button-color-obj-4"),
  COLORBUTTONOBJ5: document.getElementById("button-color-obj-5"),
  COLORBUTTONOBJ6: document.getElementById("button-color-obj-6"),
  COLORBUTTONOBJ7: document.getElementById("button-color-obj-7"),
  COLORBUTTONOBJ8: document.getElementById("button-color-obj-8"),
  COLORBUTTONOBJ9: document.getElementById("button-color-obj-9"),
  COLORBUTTONOBJ10: document.getElementById("button-color-obj-10"),

  COLORPICKERBUTTON: document.getElementById("button-colorpicker"),
  COLORMENUE: document.getElementById("colorPicker"),
  COLORICON: document.getElementById("icon-colorpicker"),
  COLORBUTTON1: document.getElementById("button-color-1"),
  COLORBUTTON2: document.getElementById("button-color-2"),
  COLORBUTTON3: document.getElementById("button-color-3"),
  COLORBUTTON4: document.getElementById("button-color-4"),
  COLORBUTTON5: document.getElementById("button-color-5"),
  COLORBUTTON6: document.getElementById("button-color-6"),
  COLORBUTTON7: document.getElementById("button-color-7"),
  COLORBUTTON8: document.getElementById("button-color-8"),
  COLORBUTTON9: document.getElementById("button-color-9"),
  COLORBUTTON10: document.getElementById("button-color-10"),

  TEXTBOXBUTTON: document.getElementById("button-textbox"),
  TEXTBOXBUTTON1: document.getElementById("button-textbox-1"),
  TEXTBOXBUTTON2: document.getElementById("button-textbox-2"),
  TEXTBOXMENUE: document.getElementById("textboxPicker"),
  TEXTBOXSLIDER: document.getElementById("slider-textbox"),
  TEXTBOXSLIDEROUTPUT: document.getElementById("slider-textbox-output"),

  MOUSEBUTTON: document.getElementById("button-mouse"),

  FREEDRAWBUTTON: document.getElementById("button-freedraw"),
  FREEDRAWBUTTON1: document.getElementById("button-freedraw-1"),
  FREEDRAWBUTTON2: document.getElementById("button-freedraw-2"),
  FREEDRAWMENUE: document.getElementById("freeDrawPicker"),
  FREEDRAWSLIDER: document.getElementById("slider-freedraw"),
  FREEDRAWSLIDEROUTPUT: document.getElementById("slider-freedraw-output"),

  CIRCLEBUTTON: document.getElementById("button-circle"),
  CIRCLEBUTTON1: document.getElementById("button-circle-1"),
  CIRCLEBUTTON2: document.getElementById("button-circle-2"),
  CIRCLEMENUE: document.getElementById("circlePicker"),

  RECTBUTTON: document.getElementById("button-rect"),
  RECTBUTTON1: document.getElementById("button-rect-1"),
  RECTBUTTON2: document.getElementById("button-rect-2"),
  RECTMENUE: document.getElementById("rectPicker"),

  ARROWBUTTON: document.getElementById("button-arrow"),
  ARROWBUTTON1: document.getElementById("button-arrow-1"),
  ARROWBUTTON2: document.getElementById("button-arrow-2"),
  ARROWBUTTON3: document.getElementById("button-arrow-3"),
  ARROWMENUE: document.getElementById("arrowPicker"),

  DOWNLOADBUTTON: document.getElementById("button-download"),

  ZOOMINBUTTON: document.getElementById("button-zoom-in"),
  ZOOMOUTBUTTON: document.getElementById("button-zoom-out"),
  ZOOMINITBUTTON: document.getElementById("button-zoom-init"),


  // Image-Upload

  IMAGEUPLOAD: document.getElementById("addImg"),

};

//for Arrow
function calculateAngle(origX, origY, pointerX, pointerY) {

  var vecA1 = (origX - 1) * (origY - pointerX),
    vecB1 = (origY) * (origY - pointerY),
    vecA2 = ((origX - 1) * (origX - 1)) + ((origY) * (origY)),
    vecB2 = ((origX - pointerX) * (origX - pointerX)) + ((origY - pointerY) * (
      origY - pointerY));

  var acos = Math.acos((vecA1 + vecB1) / ((Math.sqrt(vecA2)) * (Math.sqrt(
    vecB2))));
  return acos * (180 / Math.PI);
}

export default Config;
export { calculateAngle };