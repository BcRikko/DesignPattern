class ChicagoStyleVeggiePizza extends Pizza {
    constructor() {
        super();
        this._name = 'シカゴスタイルのディープディッシュ野菜ピザ';
        this.dough = '極厚クラスト生地';
        this.sauce = 'プラムトマトソース';

        this.toppings.push('刻んだモッツァレラチーズ');
        this.toppings.push('黒オリーブ');
        this.toppings.push('ほうれん草');
        this.toppings.push('ナス');
    }

    // override
    cut(): void {
        console.log('ピザを四角形に切り分ける');
    }
}
