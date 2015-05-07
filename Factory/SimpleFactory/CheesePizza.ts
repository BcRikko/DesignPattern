class CheesePizza extends Pizza {
    constructor() {
        super();
        this._name = 'チーズピザ';
        this.dough = '普通のクラスト生地';
        this.sauce = 'マリナラソース';
        this.toppings.push('モッツァレラチーズ');
        this.toppings.push('パルメザンチーズ');
    }
}
