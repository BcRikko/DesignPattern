module Strategy {
    export class MallardDuck extends Duck {
        constructor() {
            super();
            this.quackBehavior = new Quack();
            this.flyBehavior = new FlyWithWings();
        }

        display() {
            console.log('マガモだよ');
        }
    }
}
