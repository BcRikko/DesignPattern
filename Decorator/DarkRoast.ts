class DarkRoast extends Beverage {
    constructor() {
        super();
        this._description = 'ダークローストコーヒー';
    }

    cost(): number {
        return 0.99;
    }
}
