class NYStyleClamPizza extends Pizza {
    constructor() {
        super();
        this._name = 'ニューヨークスタイルのクラムピザ';
        this.dough = '薄いクラスト生地';
        this.sauce = 'マリナラソース';

        this.toppings.push('粉レッジャーノチーズ');
        this.toppings.push('ロングアイランド湾産の新鮮なクラム');
    }
}
