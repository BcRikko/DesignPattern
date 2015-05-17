class HottubOffCommand implements ICommand {
    private hottub: Hottub;

    constructor(hottub: Hottub) {
        this.hottub = hottub;
    }

    execute(): void {
        this.hottub.cool();
        this.hottub.off();
    }
}
