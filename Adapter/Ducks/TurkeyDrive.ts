var duck = new MallardDuck();
var duckAdapter = new DuckAdapter(duck);

for (let i = 0; i < 10; i++){
    console.log('鴨アダプタ');
    duckAdapter.gobble();
    duckAdapter.fly();
}
