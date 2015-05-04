class HouseBlend extends Beverage {
    constructor() {
        super();
        this._description = 'ハウスブランド';
    }

    cost(): number {
        return 0.89;
    }
}
