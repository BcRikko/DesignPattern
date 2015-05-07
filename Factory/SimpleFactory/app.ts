var factory = new SimplePizzaFactory();
var store = new PizzaStore(factory);

var pizza: Pizza;

pizza = store.orderPizza('チーズ');
console.log(pizza.name + 'を注文しました。');
console.log(pizza.toString());

pizza = store.orderPizza('ペパロニ');
console.log(pizza.name + 'を注文しました。');
console.log(pizza.toString());

pizza = store.orderPizza('クラム');
console.log(pizza.name + 'を注文しました。');
console.log(pizza.toString());

pizza = store.orderPizza('野菜');
console.log(pizza.name + 'を注文しました。');
console.log(pizza.toString());
