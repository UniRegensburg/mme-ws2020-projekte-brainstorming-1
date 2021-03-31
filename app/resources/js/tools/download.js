/* eslint-env browser */

function createDataURI(canvas) {
  canvas.toDataURL();
}

function downloadToLocal(canvas) {
  // Internet Explorer / Edge 
  if (window.navigator.msSaveBlob) {
    window.navigator.msSaveBlob(canvas.msToBlob(), "brainboard.png");
  } else {
    // Chrome / Firefox
    const a = document.createElement("a");

    document.body.appendChild(a);
    a.href = canvas.toDataURL();
    a.download = "brainboard.png";
    a.click();
    document.body.removeChild(a);
  }
}

class Download {

  startDownlad(canvas) {
    createDataURI(canvas);
    downloadToLocal(canvas);
  }
}

export default Download;