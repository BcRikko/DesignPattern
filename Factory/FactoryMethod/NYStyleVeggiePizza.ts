class NYStyleVeggiePizza extends Pizza {
    constructor() {
        super();
        this._name = 'ニューヨークスタイルの野菜ピザ';
        this.dough = '薄いクラスト生地';
        this.sauce = 'マリナラソース';

        this.toppings.push('粉レッジャーノチーズ');
        this.toppings.push('ニンニク');
        this.toppings.push('玉ねぎ');
        this.toppings.push('マリナラソース');
        this.toppings.push('唐辛子');
    }
}
