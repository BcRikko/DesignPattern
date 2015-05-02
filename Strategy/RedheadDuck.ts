module Strategy {
    export class RedheadDuck extends Duck {
        constructor() {
            super();
            this.quackBehavior = new Squeak();
            this.flyBehavior = new FlyWithWings();
        }

        display() {
            console.log('アメリカホシハジロだよ');
        }
    }
}
