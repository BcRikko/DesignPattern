class DimmerLightOnCommand implements ICommand {
    private light: Light;
    private preLevel: number;

    constructor(light: Light) {
        this.light = light;
    }

    execute(): void {
        this.preLevel = this.light.level;
        this.light.dim(75);
    }

    undo(): void {
        this.light.dim(this.preLevel);
    }
}
