class ChicagoStylePepperoniPizza extends Pizza {
    constructor() {
        super();
        this._name = 'シカゴスタイルのペパロニピザ';
        this.dough = '極厚クラスト生地';
        this.sauce = 'プラムトマトソース';

        this.toppings.push('刻んだモッツァレラチーズ');
        this.toppings.push('黒オリーブ');
        this.toppings.push('ほうれん草');
        this.toppings.push('ナス');
        this.toppings.push('薄切りペパロニ');
    }

    // override
    cut(): void {
        console.log('ピザを四角形に切り分ける');
    }
}
