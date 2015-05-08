class NYStylePepperoniPizza extends Pizza {
    constructor() {
        super();
        this._name = 'ニューヨークスタイルのペパロニピザ';
        this.dough = '薄いクラスト生地';
        this.sauce = 'マリナラソース';

        this.toppings.push('粉レッジャーノチーズ');
        this.toppings.push('薄切りペパロニ');
        this.toppings.push('ニンニク');
        this.toppings.push('玉ねぎ');
        this.toppings.push('マッシュルーム');
        this.toppings.push('唐辛子');
    }
}
