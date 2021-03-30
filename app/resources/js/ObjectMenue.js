import ConfigUI from "./configUI.js";

var top, left, obj, _clipboard, colorMenue = ConfigUI.COLORMENUEOBJ,
  selectedColor;

function showObjMenue(canvas) {
  obj = canvas.getActiveObject();

  if (obj) {
    //top = obj.top; left = obj.left;

    //ConfigUI.OBJECTMENUE.style.top = (top-60)+"px";
    //ConfigUI.OBJECTMENUE.style.left = left+"px";
    //ConfigUI.OBJECTMENUE.style.top = 20 + "px";
    //ConfigUI.OBJECTMENUE.style.left = 480 + "px";
    ConfigUI.OBJECTMENUE.style.display = "inline-Block";

    ConfigUI.OBJECTMENUE.classList.remove("hide");
  } else {
    ConfigUI.OBJECTMENUE.classList.add("hide");
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
      //selectedColor = "#F8961E";
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

  obj.forEach(element => {
    if (element.fill !== "transparent" && element.fill !== "#EEEEEE" &&
      element.fill !== null) {
      element.set({ fill: selectedColor });
    } else if (element.fill === "#EEEEEE") {
      element.set({ backgroundColor: selectedColor });
    } else if (element.stroke.length === 9) {
      element.set({ stroke: selectedColor + "80" });
    } else {
      element.set({ stroke: selectedColor });
    }
    canvas.fire('object:modified', {target: element});
  });

  //obj.set({fill: selectedColor});
  canvas.renderAll();
  colorMenue.classList.add("hide");
}

class ObjectMenue {
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

    ConfigUI.COLORBUTTONOBJ1.addEventListener("click",
  function() { changeColor(canvas, obj, 1); });
    ConfigUI.COLORBUTTONOBJ2.addEventListener("click",
  function() { changeColor(canvas, obj, 2); });
    ConfigUI.COLORBUTTONOBJ3.addEventListener("click",
  function() { changeColor(canvas, obj, 3); });
    ConfigUI.COLORBUTTONOBJ4.addEventListener("click",
  function() { changeColor(canvas, obj, 4); });
    ConfigUI.COLORBUTTONOBJ5.addEventListener("click",
  function() { changeColor(canvas, obj, 5); });
    ConfigUI.COLORBUTTONOBJ6.addEventListener("click",
  function() { changeColor(canvas, obj, 6); });
    ConfigUI.COLORBUTTONOBJ7.addEventListener("click",
  function() { changeColor(canvas, obj, 7); });
    ConfigUI.COLORBUTTONOBJ8.addEventListener("click",
  function() { changeColor(canvas, obj, 8); });
    ConfigUI.COLORBUTTONOBJ9.addEventListener("click",
  function() { changeColor(canvas, obj, 9); });
    ConfigUI.COLORBUTTONOBJ10.addEventListener("click",
  function() { changeColor(canvas, obj, 10); });
  }

  copy(canvas) {
    // from http://fabricjs.com/copypaste
    canvas.getActiveObject().clone(function(cloned) {
      _clipboard = cloned;
    });

    _clipboard.clone(function(clonedObj) {
      canvas.discardActiveObject();
      clonedObj.set({
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
      _clipboard.top += 15;
      _clipboard.left += 15;
      canvas.setActiveObject(clonedObj);
      canvas.requestRenderAll();
    });
  }

  toFront(canvas) {
    obj = canvas.getActiveObjects();
    obj.forEach(element => {
      canvas.bringToFront(element);
      canvas.fire('object:modified', {target: element});
    });
    canvas.discardActiveObject().renderAll();
  }

  toBack(canvas) {
    obj = canvas.getActiveObjects();
    obj.forEach(element => {
      canvas.sendToBack(element);
      canvas.fire('object:modified', {target: element});
    });
    canvas.discardActiveObject().renderAll();
  }

  delete(canvas) {
    obj = canvas.getActiveObjects();
    obj.forEach(element => canvas.remove(element));
    ConfigUI.OBJECTMENUE.classList.add("hide");
  }
}

export default ObjectMenue;