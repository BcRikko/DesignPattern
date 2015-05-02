module Strategy {
    export class RubberDuck extends Duck {
        constructor() {
            super();
            this.quackBehavior = new MuteQuack();
            this.flyBehavior = new FlyNoWay();
        }

        display() {
            console.log('アヒル隊長だよ');
        }
    }
}
