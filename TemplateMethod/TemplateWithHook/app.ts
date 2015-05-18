var tea = new Tea();
var coffee = new Coffee();

console.log('紅茶を作ります');
tea.prepareRecipe();

console.log('コーヒーを作ります');
coffee.prepareRecipe();


var teaHook = new TeaWithHook();
var coffeeHook = new CoffeeWithHook();

console.log('紅茶を作ります');
teaHook.prepareRecipe();

console.log('コーヒーを作ります');
coffeeHook.prepareRecipe();
