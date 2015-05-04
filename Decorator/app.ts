var beverage1 = new Espresso();
console.log('%s $%f', beverage1.description, beverage1.cost());

var beverage2 = new DarkRoast();
beverage2 = new Mocha(beverage2);
beverage2 = new Mocha(beverage2);
beverage2 = new Whip(beverage2);
console.log('%s $%f', beverage2.description, beverage2.cost());

var beverage3 = new HouseBlend();
beverage3 = new Soy(beverage3);
beverage3 = new Mocha(beverage3);
beverage3 = new Whip(beverage3);
console.log('%s $%f', beverage3.description, beverage3.cost());

var beverage4 = new Decaf();
beverage4.size = Size.VENTI;
beverage4 = new Soy(beverage4);
beverage4 = new Milk(beverage4);
beverage4 = new Mocha(beverage4);
beverage4 = new Whip(beverage4);
// ※小数計算で誤差あり
console.log('%s $%f', beverage4.description, beverage4.cost());
