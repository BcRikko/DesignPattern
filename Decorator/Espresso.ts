class Espresso extends Beverage {
    constructor() {
        super();
        this._description = 'エスプレッソ';
    }

    cost(): number {
        return 1.99;
    }
}
