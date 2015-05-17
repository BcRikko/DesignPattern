class CeilingFanOnCommand implements ICommand {
    private ceilingFan: CeilingFan;

    constructor(ceilingFan: CeilingFan) {
        this.ceilingFan = ceilingFan;
    }

    execute(): void {
        this.ceilingFan.high();
    }
}
