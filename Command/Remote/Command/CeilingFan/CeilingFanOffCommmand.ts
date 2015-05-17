class CeilingFanOffCommand implements ICommand {
    private ceilingFan: CeilingFan;

    constructor(ceilingFan: CeilingFan) {
        this.ceilingFan = ceilingFan;
    }

    execute(): void {
        this.ceilingFan.off();
    }
}
