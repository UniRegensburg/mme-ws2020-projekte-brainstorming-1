/* eslint-env browser */
/* eslint-disable no-undef */

var uploadedFile = document.getElementById("uploaded-file"), file;

function loadFile(canvas, file) {
    let imageType = /image.*/;

    if(file.type.match(imageType)) {
        const reader = new FileReader();
        console.log("passed type test");

        reader.addEventListener("load", function() {
            //console.log(this.result);
            fabric.Image.fromURL(this.result, function(loadedImage) {
                loadedImage.scale(0.5);
                // Bild verändern
                canvas.add(loadedImage); 
            });
        }); 
            reader.readAsDataURL(file);
    }
}

class Image {

    loadImage(canvas) {
        uploadedFile.addEventListener("change", function() {
            file = this.files[0];
            console.log(file);
            loadFile(canvas, file);
        });
    }
}

export default Image;