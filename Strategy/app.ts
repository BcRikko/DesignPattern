module Strategy {
    console.log('MallardDuck');
    var mallard: Duck = new MallardDuck();
    mallard.performQuack();
    mallard.performFly();
    mallard.swim();

    console.log('RedheadDuck');
    var redhead: Duck = new RedheadDuck();
    redhead.performQuack();
    redhead.performFly();
    mallard.swim();

    console.log('RubberDuck');
    var rubber: Duck = new RubberDuck();
    rubber.performQuack();
    rubber.performFly();
    mallard.swim();

    console.log('DecoyDuck');
    var decoy: Duck = new DecoyDuck();
    decoy.performQuack();
    decoy.performFly();
    mallard.swim();

    // DecoyDuckの振る舞いを書き換える
    decoy.quackBehavior = new Quack();
    decoy.flyBehavior = new FlyWithWings();

    decoy.performQuack();
    decoy.performFly();
    mallard.swim();
}
