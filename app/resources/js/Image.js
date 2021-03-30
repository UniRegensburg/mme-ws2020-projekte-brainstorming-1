/* eslint-env browser */
/* eslint-disable no-undef */
var fileReader = document.getElementById("uploaded-file"), reader, inputForUpload, imgElement;

function loadFile(canvas, inputForUpload) {
    reader = new FileReader(); 
    
    reader.addEventListener("load", function() {

        imgElement = document.createElement("img");
        imgElement.src = reader.result;

        imgElement.onload = function() {
            let imageInstance, cw, ch;
            imageInstance = new fabric.Image(imgElement);
            
            // checks if canvas is landscape or portrait and scale image
            cw = canvas.getWidth();
            ch = canvas.getHeight();

            if (cw > ch) {
                // canvas is landscape
                imageInstance.scaleToWidth(canvas.getWidth() - 200);
                imageInstance.scaleToHeight(canvas.getHeight() - 200);
            } else {
                // canvas is portrait
                imageInstance.scaleToHeight(canvas.getHeight() - 200);
                imageInstance.scaleToWidth(canvas.getWidth() - 200);
            }

                canvas.add(imageInstance); 
                canvas.centerObject(imageInstance);
        };        
    }); 
    reader.readAsDataURL(inputForUpload.files[0]);
}

class Image {
    loadImage(canvas) {
        fileReader.addEventListener("change", function(e) {
            inputForUpload = e.target;
            loadFile(canvas, inputForUpload); 
        });
    }
}

export default Image;
