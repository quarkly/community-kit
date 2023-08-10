class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(event, cb) {
        if (!this.events[event]) {
            this.events[event] = [];
        }

        this.events[event].push(cb);

        return () => this.off(event, cb);
    }

    emit(event, ...args) {
        if (this.events[event]) {
            this.events[event].forEach((cb) => cb(...args));
        }
    }

    off(event, cb) {
        if (this.events[event]) {
            this.events[event] = this.events[event].filter((c) => c !== cb);
        }
    }
}

export default EventEmitter;
