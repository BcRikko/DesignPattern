class HottubOffCommand implements ICommand {
    private hottub: Hottub;

    constructor(hottub: Hottub) {
        this.hottub = hottub;
    }

    execute(): void {
        this.hottub.temperature = 36;
        this.hottub.off();
    }
    
    undo():void{
        this.hottub.on();
    }
}
