import ConfigUI from "./ConfigUI.js";

var top, left;

function showObjMenue(canvas){
		var obj = canvas.getActiveObject();

		if (obj) {
		top = obj.top; left = obj.left;
		
		ConfigUI.OBJECTMENUE.style.top = (top-60)+"px";
		ConfigUI.OBJECTMENUE.style.left = left+"px";
		ConfigUI.OBJECTMENUE.style.display = "inline-Block";
		
		ConfigUI.OBJECTMENUE.classList.remove("hide");} 
		
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
		canvas.on('object:modified', function(o){
			showObjMenue(canvas);
		}); 
		canvas.on('object:moving', function(o){
			showObjMenue(canvas);
		}); 
	}
}

export default ObjectMenue;