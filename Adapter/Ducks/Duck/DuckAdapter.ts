class DuckAdapter implements ITurkey {
    private duck: IDuck;

    constructor(duck: IDuck) {
        this.duck = duck;
    }
    
    gobble():void{
        this.duck.quack();
    }
    
    fly():void{
        if (Math.floor(Math.random() * 5) === 0){
            this.duck.fly();
        }
    }
}
