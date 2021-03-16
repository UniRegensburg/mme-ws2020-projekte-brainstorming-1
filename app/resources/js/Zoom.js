/* eslint-env browser */

function mouseZoom(canvas) {
    canvas.on("mouse:wheel", function(opt) {
        let delta, zoom;
        delta = opt.e.deltaY;
        zoom = canvas.getZoom();
        zoom *= 0.999 ** delta;
        if (zoom > 20) {
            zoom = 20;
        } 
        if (zoom < 0.01) {
            zoom = 0.01;
        } 
        canvas.setZoom(zoom);
        opt.e.preventDefault();
        opt.e.stopPropagation();
      });
}

function buttonZoom(zoomInButton, zoomInitButton, zoomOutButton, canvas) {
    let zoom = 1;
		
		zoomInButton.addEventListener('click', function(){
			zoom += 0.1;
			canvas.setZoom(zoom);
		});
		zoomInitButton.addEventListener('click', function(){
			zoom = 1;
			canvas.setZoom(zoom);
		});
        zoomOutButton.addEventListener('click', function(){
			zoom -= 0.1;
			canvas.setZoom(zoom);
		});
}

class Zoom {
    enableZoom(zoomInButton, zoomInitButton, zoomOutButton, canvas) {
        mouseZoom(canvas);
        buttonZoom(zoomInButton, zoomInitButton, zoomOutButton, canvas);
    }
}

export default Zoom;