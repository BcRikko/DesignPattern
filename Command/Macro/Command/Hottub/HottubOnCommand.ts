class HottubOnommand implements ICommand {
    private hottub: Hottub;

    constructor(hottub: Hottub) {
        this.hottub = hottub;
    }

    execute(): void {
        this.hottub.on();
        this.hottub.temperature = 40;
        this.hottub.circulate();
    }
    
    undo():void{
        this.hottub.off();
    }
}
