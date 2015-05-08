var nyStore = new NYPizzaStore();
var chicagoStore = new ChicagoPizzaStore();

var pizza: Pizza;

pizza = nyStore.orderPizza('チーズ');
console.log('イーサンが' + pizza.name + 'を注文しました\n');

pizza = nyStore.orderPizza('クラム');
console.log('イーサンが' + pizza.name + 'を注文しました\n');

pizza = nyStore.orderPizza('ペパロニ');
console.log('イーサンが' + pizza.name + 'を注文しました\n');

pizza = nyStore.orderPizza('野菜');
console.log('イーサンが' + pizza.name + 'を注文しました\n');

pizza = chicagoStore.orderPizza('チーズ');
console.log('ジョエルが' + pizza.name + 'を注文しました\n');

pizza = chicagoStore.orderPizza('クラム');
console.log('ジョエルが' + pizza.name + 'を注文しました\n');

pizza = chicagoStore.orderPizza('ペパロニ');
console.log('ジョエルが' + pizza.name + 'を注文しました\n');

pizza = chicagoStore.orderPizza('野菜');
console.log('ジョエルが' + pizza.name + 'を注文しました\n');
