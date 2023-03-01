class ExtendedClock extends Clock {
    constructor({template}, precision = 1000) {
        super(template);
        this.precision = precision;
    }

    start() {
        this.render();
        this.timer = setInterval( () => setInterval(() => this.render(), 1000), this.precision);
    }
}

let exclock = new ExtendedClock({template: 'h:m:s'}, 3000);
exclock.start();