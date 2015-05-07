class VeggiePizza extends Pizza {
    constructor() {
        super();
        this._name = '野菜ピザ';
        this.dough = 'クラスト生地';
        this.sauce = 'マリナラソース';
        this.toppings.push('刻んだモッツァレラチーズ');
        this.toppings.push('粉パルメザンチーズ');
        this.toppings.push('みじん切り玉ねぎ');
        this.toppings.push('マッシュルーム');
        this.toppings.push('唐辛子');
        this.toppings.push('黒オリーブ');
    }
}
