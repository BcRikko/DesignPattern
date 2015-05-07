class PepperoniPizza extends Pizza {
    constructor() {
        super();
        this._name = 'ペパロニピザ';
        this.dough = 'クラスト生地';
        this.sauce = 'マリナラソース';
        this.toppings.push('ペパロニ');
        this.toppings.push('オニオンスライス');
        this.toppings.push('粉パルメザンチーズ');
    }
}
