var canvas;

class Canvas{

    drawCanvas(){
        canvas = new fabric.Canvas('canvas', {
            height: window.innerHeight,
            width: window.innerWidth,
            backgroundColor: '#F5F5F5'
        });  
        canvas.renderAll();  
    }

    update(element){
        canvas.add(element);
        canvas.renderAll();
    }
}

export default Canvas;