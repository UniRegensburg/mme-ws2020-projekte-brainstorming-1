class Timer {
  constructor(onTickCb, onEndCb) {
    this.onTickCb = onTickCb;
    this.onEndCb = onEndCb;
  }

  setSeconds(seconds) {
    this.seconds = seconds;
  }

  start() {
    this.countdown = setInterval(this.onTick.bind(this), 1000)
  }

  stop() {
    clearInterval(this.countdown);
  }

  onTick() {
    if (this.seconds > 0) {
      this.seconds -= 1;
      this.onTickCb(this.seconds);
      if (this.seconds == 0) {
        this.onEndCb();
        this.stop();
      }
    } else {
      this.stop();
    }
  }

}

module.exports = Timer