module Strategy {
    export class DecoyDuck extends Duck {
        constructor() {
            super();
            this.quackBehavior = new MuteQuack();
            this.flyBehavior = new FlyNoWay();
        }

        display() {
            console.log('デコイキング');
        }
    }
}
