import { makeAutoObservable } from 'mobx';

class Timer {
    constructor() {
        this.count = 0;
        this.timerId = null;

        makeAutoObservable(this);
    }

    inc() {
        this.count += 1;
    }

    init({ timer }) {
        clearInterval(this.timerId);

        if (timer === 'start') {
            this.timerId = setInterval(() => this.inc(), 200);
        }
    }

    deinit() {
        clearInterval(this.timerId);
    }
}

export default Timer;
