class HottubOnommand implements ICommand {
    private hottub: Hottub;

    constructor(hottub: Hottub) {
        this.hottub = hottub;
    }

    execute(): void {
        this.hottub.on();
        this.hottub.heat();
        this.hottub.bubblesOn();
    }
}
