var duck = new MallardDuck();

var turkey = new WildTurkey();
var turkeyAdapter = new TurkeyAdapter(turkey);

console.log('七面鳥');
turkey.gobble();
turkey.fly();

console.log('鴨');
testDuck(duck);

console.log('七面鳥アダプタ');
testDuck(turkeyAdapter);

function testDuck(duck: IDuck): void {
    duck.quack();
    duck.fly();
}
