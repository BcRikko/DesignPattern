class Milk extends CondimentDecorator {
    private _beverage: Beverage;

    constructor(beverage: Beverage) {
        super();
        this._beverage = beverage;
    }

    get description(): string {
        return this._beverage.description + ', ミルク';
    }

    cost(): number {
        return 0.10 + this._beverage.cost();
    }
}
