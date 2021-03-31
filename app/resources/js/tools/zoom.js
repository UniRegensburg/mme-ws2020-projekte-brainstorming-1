/* eslint-env browser */
var zoom = 1;

// zoom via mouse or touchpad
function mouseZoom(canvas) {
  canvas.on("mouse:wheel", function(opt) {
    let delta;
    delta = opt.e.deltaY;
    zoom = canvas.getZoom();
    zoom *= Math.pow(0.999, delta);
    if (zoom > 4) {
      zoom = 4;
    }
    if (zoom < 0.2) {
      zoom = 0.2;
    }
    canvas.setZoom(zoom);
    opt.e.preventDefault();
    opt.e.stopPropagation();
  });
}

// zoom via button click
function buttonZoom(zoomInButton, zoomInitButton, zoomOutButton, canvas) {
  zoomInButton.addEventListener('click', function() {
    zoom += 0.1;
    canvas.setZoom(zoom);
  });
  zoomInitButton.addEventListener('click', function() {
    zoom = 1;
    canvas.setZoom(zoom);
  });
  zoomOutButton.addEventListener('click', function() {
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