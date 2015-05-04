class Decaf extends Beverage {
    constructor() {
        super();
        this._description = 'カフェインレスコーヒー';
    }

    cost(): number {
        return 1.05;
    }
}
