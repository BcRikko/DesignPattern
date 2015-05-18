class TurkeyAdapter implements IDuck {
    private turkey: ITurkey;

    constructor(turkey: ITurkey) {
        this.turkey = turkey;
    }

    quack(): void {
        this.turkey.gobble();
    }

    fly(): void {
        for (let i = 0; i < 5; i++) {
            this.turkey.fly();
        }
    }
}
