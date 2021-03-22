import ConfigUI from "./ConfigUI.js";

var top, left, obj, _clipboard;

function showObjMenue(canvas){
		obj = canvas.getActiveObject();

		if (obj) {
		//top = obj.top; left = obj.left;
		
			//ConfigUI.OBJECTMENUE.style.top = (top-60)+"px";
			//ConfigUI.OBJECTMENUE.style.left = left+"px";
			ConfigUI.OBJECTMENUE.style.top = 20+"px";
			ConfigUI.OBJECTMENUE.style.left = 480+"px";
			ConfigUI.OBJECTMENUE.style.display = "inline-Block";
			
			ConfigUI.OBJECTMENUE.classList.remove("hide");
		} 
		
		else {ConfigUI.OBJECTMENUE.classList.add("hide");}
}

class ObjectMenue{
	isObjMenue(canvas){
		canvas.on('selection:updated', function(o){
			showObjMenue(canvas);
		});
		canvas.on('selection:created', function(o){
			showObjMenue(canvas);
		});
		canvas.on('selection:cleared', function(o){
			showObjMenue(canvas);
		}); 
		/*
		canvas.on('object:modified', function(o){
			showObjMenue(canvas);
		}); 
		canvas.on('object:moving', function(o){
			showObjMenue(canvas);
		}); */
	}

	changeColor(canvas){
		obj = canvas.getActiveObject();
	}

	copy(canvas){
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

	delete(canvas){
		obj = canvas.getActiveObjects();
		obj.forEach(element => canvas.remove(element));
	}
}

export default ObjectMenue;