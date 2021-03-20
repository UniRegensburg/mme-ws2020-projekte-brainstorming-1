import Config from "./Config.js";
import ConfigUI from "./ConfigUI.js"

function addImage() {
  IMAGEUPLOAD.imgObj.addEventListener("click", function(e) {
    var file = e.target.files[0],
      reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function(f) {
      var data = f.target.result;
      fabric.Image.fromURL(data, function(img) {
        var oImg = img.set({
          left: canvas.getCenter().left,
          top: canvas.getCenter().top,
          originX: "center",
          originY: "center",
        });
        oImg.scaleToWidth(canvas.getWidth() / 2);
        canvas.add(oImg).requestRenderAll();
        canvas.setActiveObject(oImg);
      });
    };
  });
}

class Image {
  addImage(canvas);
}

export default Image;

/* document.getElementById('imgLoader').onchange = function handleImage(e) {
  var reader = new FileReader();
  reader.onload = function(event) {
    console.log('fdsf');
    var imgObj = new Image();
    imgObj.src = event.target.result;
    imgObj.onload = function() {
      // start fabricJS stuff

      var image = new fabric.Image(imgObj);
      image.set({
        left: 250,
        top: 250,
        angle: 20,
        padding: 10,
        cornersize: 10
      });
      //image.scale(getRandomNum(0.1, 0.25)).setCoords();
      canvas.add(image);

      // end fabricJS stuff
    }

  }
  reader.readAsDataURL(e.target.files[0]);
}

 */


  /* addImage() {
        imgObj.addEventListener("change", function(e) {
            var file = e.target.files[0],
                reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = function(f) {
                var data = f.target.result;
                fabric.Image.fromURL(data, function(img) {
                    var oImg = img.set({
                        left: canvas.getCenter().left,
                        top: canvas.getCenter().top,
                        angle: Config.ANGLE,
                        originX: "center",
                        originY: "center",
                    });
                    oImg.scaleToWidth(canvas.getWidth() / Config.HALF);
                    canvas.add(oImg).requestRenderAll();
                    canvas.setActiveObject(oImg);
                });
            };
        });
    } */