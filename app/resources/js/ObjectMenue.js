import Config from "./utilis/config.js";

var obj, clipboard, colorMenue = Config.COLORMENUEOBJ,
  selectedColor;

function showObjMenue(canvas) {
  obj = canvas.getActiveObject();

  if (obj) {
    Config.OBJECTMENUE.classList.remove("hide");
  } else {
    Config.OBJECTMENUE.classList.add("hide");
    colorMenue.classList.add("hide");
  }
}

function changeColor(canvas, obj, position) {
  switch (position) {
    case 1:
      selectedColor = "#F94144";
      break;
    case 2:
      selectedColor = "#F3722C";
      break;
    case 3:
      selectedColor = "#00ACC1";
      break;
    case 4:
      selectedColor = "#F9C74F";
      break;
    case 5:
      selectedColor = "#90BE6D";
      break;
    case 6:
      selectedColor = "#43AA8B";
      break;
    case 7:
      selectedColor = "#577590";
      break;
    case 8:
      selectedColor = "#E0E0E0";
      break;
    case 9:
      selectedColor = "#9E9E9E";
      break;
    case 10:
      selectedColor = "#616161";
      break;
    default:
      selectedColor = "#F94144";
  }

  //changes the color of the colored attribute (background, text, stroke) for each type of element; 
  obj.forEach(element => {
    if (element.fill !== "transparent" && element.fill !== "#EEEEEE" && //"#EEEEEE" is only the only the color of the font of filled textboxes
      element.fill !== null) {
      element.set({ fill: selectedColor });
    } else if (element.fill === "#EEEEEE") {
      element.set({ backgroundColor: selectedColor });
    } else if (element.stroke.length === 9) { //check if object has a transpatrent color (marker pan)
      element.set({ stroke: selectedColor + "80" }); //changes the color in a transparent color again
    } else {
      element.set({ stroke: selectedColor });
    }
    canvas.fire('object:modified', { target: element });
  });

  canvas.renderAll();
  colorMenue.classList.add("hide");
}

class ObjectMenue {
  //ObjectMenue is only shown when an object (or more) is selected
  isObjMenue(canvas) {
    canvas.on('selection:updated', function(o) {
      showObjMenue(canvas);
    });
    canvas.on('selection:created', function(o) {
      showObjMenue(canvas);
    });
    canvas.on('selection:cleared', function(o) {
      showObjMenue(canvas);
    });
  }

  showColorMenue(canvas) {
    obj = canvas.getActiveObjects();
    colorMenue.classList.remove("hide");

    Config.COLORBUTTONOBJ1.addEventListener("click",
      function() { changeColor(canvas, obj, 1); });
    Config.COLORBUTTONOBJ2.addEventListener("click",
      function() { changeColor(canvas, obj, 2); });
    Config.COLORBUTTONOBJ3.addEventListener("click",
      function() { changeColor(canvas, obj, 3); });
    Config.COLORBUTTONOBJ4.addEventListener("click",
      function() { changeColor(canvas, obj, 4); });
    Config.COLORBUTTONOBJ5.addEventListener("click",
      function() { changeColor(canvas, obj, 5); });
    Config.COLORBUTTONOBJ6.addEventListener("click",
      function() { changeColor(canvas, obj, 6); });
    Config.COLORBUTTONOBJ7.addEventListener("click",
      function() { changeColor(canvas, obj, 7); });
    Config.COLORBUTTONOBJ8.addEventListener("click",
      function() { changeColor(canvas, obj, 8); });
    Config.COLORBUTTONOBJ9.addEventListener("click",
      function() { changeColor(canvas, obj, 9); });
    Config.COLORBUTTONOBJ10.addEventListener("click",
      function() { changeColor(canvas, obj, 10); });
  }

  copy(canvas) {
    // from http://fabricjs.com/copypaste
    canvas.getActiveObject().clone(function(cloned) {
      clipboard = cloned;
    });

    clipboard.clone(function(clonedObj) {
      canvas.discardActiveObject();
      clonedObj.set({
        //pastes the cloned object a bit offset to visulize that the dublication worked
        left: clonedObj.left + 15,
        top: clonedObj.top + 15,
        evented: true,
      });
      if (clonedObj.type === 'activeSelection') {
        clonedObj.canvas = canvas;
        clonedObj.forEachObject(function(obj) {
          canvas.add(obj);
        });
        clonedObj.setCoords();
      } else {
        canvas.add(clonedObj);
      }
      clipboard.top += 15;
      clipboard.left += 15;
      canvas.setActiveObject(clonedObj); //the cloned object is now the selected object
      canvas.requestRenderAll();
    });
  }

  toFront(canvas) {
    obj = canvas.getActiveObjects();
    obj.forEach(element => {
      canvas.bringToFront(element);
      canvas.fire('object:modified', { target: element });
    });
    canvas.discardActiveObject().renderAll();
  }

  toBack(canvas) {
    obj = canvas.getActiveObjects();
    obj.forEach(element => {
      canvas.sendToBack(element);
      canvas.fire('object:modified', { target: element });
    });
    canvas.discardActiveObject().renderAll();
  }

  delete(canvas) {
    obj = canvas.getActiveObjects();
    obj.forEach(element => canvas.remove(element));
    Config.OBJECTMENUE.classList.add("hide");
  }
}

export default ObjectMenue;