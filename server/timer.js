class Timer {
    constructor(onTickCb, onEndCb){
        this.onTickCb = onTickCb;
        this.onEndCb = onEndCb;
    }

    setSeconds(seconds) {
        this.seconds = seconds;
    }

    start() {
        this.countdown = setInterval(this.onTick, 1000)
    }

    stop() {
        clearInterval(this.countdown);
    }

    onTick() {
        this.seconds--;
        this.onTickCb(seconds);
        if(seconds == 0) {
            this.onEndCb();
            this.stop();
        }
    }

}

module.exports = Timer