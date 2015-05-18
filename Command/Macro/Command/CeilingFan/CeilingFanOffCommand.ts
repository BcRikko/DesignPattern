class CeilingFanOffCommand implements ICommand {
    private ceilingFan: CeilingFan;
    private prevSpeed: number;

    constructor(ceilingFan: CeilingFan) {
        this.ceilingFan = ceilingFan;
    }

    execute(): void {
        this.prevSpeed = this.ceilingFan.speed;
        this.ceilingFan.off();
    }

    undo(): void {
        switch (this.prevSpeed) {
            case CeilingFan.HIGH:
                this.ceilingFan.high();
                break;
            case CeilingFan.MEDIUM:
                this.ceilingFan.medium();
                break;
            case CeilingFan.LOW:
                this.ceilingFan.low();
                break;
            case CeilingFan.OFF:
                this.ceilingFan.off();
                break;
        }
    }
}
