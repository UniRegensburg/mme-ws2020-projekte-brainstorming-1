/* eslint-env browser */

function onMouseDown(canvas) {
  canvas.on("mouse:down", function(opt) {
    let evt = opt.e;
    if (evt.ctrlKey === true) {
      this.isDragging = true;
      this.selection = false;
      this.lastPosX = evt.clientX;
      this.lastPosY = evt.clientY;
  }
  });
}

function onMouseMove(canvas) {
  canvas.on("mouse:move", function(opt) {
    if (this.isDragging) {
      let e, vpt;
      e = opt.e;
      vpt = this.viewportTransform;
      vpt[4] += e.clientX - this.lastPosX;
      vpt[5] += e.clientY - this.lastPosY;
      this.requestRenderAll();
      this.lastPosX = e.clientX;
      this.lastPosY = e.clientY;
    }
  });
}

function onMouseRelease(canvas) {
  canvas.on("mouse:up", function(opt) {
    // on mouse up recalculate new interaction for all objects, so setViewportTransform is called
    this.setViewportTransform(this.viewportTransform);
    this.isDragging = false;
    this.selection = true;
  });
}

class Pan {
  enablePan(canvas) {
    onMouseDown(canvas);
    onMouseMove(canvas);
    onMouseRelease(canvas);
  }

  disablePan(canvas) {
    canvas.off('mouse:down');
    canvas.off('mouse:move');
    canvas.off('mouse:up');
  }
}

export default Pan;
