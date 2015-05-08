class ChicagoStyleClamPizza extends Pizza {
    constructor() {
        super();
        this._name = 'シカゴスタイルのクラムピザ';
        this.dough = '極厚クラスト生地';
        this.sauce = 'プラムトマトソース';

        this.toppings.push('刻んだモッツァレラチーズ');
        this.toppings.push('チェサピーク湾産の冷凍クラム');
    }

    // override
    cut(): void {
        console.log('ピザを四角形に切り分ける');
    }
}
