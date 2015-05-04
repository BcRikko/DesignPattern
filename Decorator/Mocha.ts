class Mocha extends CondimentDecorator {
    private _beverage: Beverage;

    constructor(beverage: Beverage) {
        super();
        this._beverage = beverage;
    }

    get description(): string {
        return this._beverage.description + ", モカ";
    }

    cost(): number {
        return 0.20 + this._beverage.cost();
    }
}
