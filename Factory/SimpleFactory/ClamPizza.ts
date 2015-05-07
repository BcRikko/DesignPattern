class ClamPizza extends Pizza {
    constructor() {
        super();
        this._name = 'クラムピザ';
        this.dough = '薄いクラスト生地';
        this.sauce = 'ホワイトガーリックソース';
        this.toppings.push('クラム');
        this.toppings.push('粉パルメザンチーズ');
    }
}
