class ChicagoStyleCheesePizza extends Pizza {
    constructor() {
        super();
        this._name = 'シカゴスタイルのディープディッシュチーズピザ';
        this.dough = '極厚クラスト生地';
        this.sauce = 'プラムトマトソース';

        this.toppings.push('刻んだモッツァレラチーズ');
    }

    // override
    cut(): void {
        console.log('ピザを四角形に切り分ける');
    }
}
