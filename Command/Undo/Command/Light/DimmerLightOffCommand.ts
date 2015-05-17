class DimmerLightOffCommand implements ICommand {
    private light: Light;
    private preLevel: number;

    constructor(light: Light) {
        this.light = light;
        this.preLevel = 100;
    }

    execute(): void {
        this.preLevel = this.light.level;
        this.light.off();
    }

    undo(): void {
        this.light.dim(this.preLevel);
    }
}
