class LightOnCommand implements ICommand {
    private light: Light;
    private level: number;

    constructor(light: Light) {
        this.light = light;
    }

    execute(): void {
        this.level = this.light.level;
        this.light.on();
    }

    undo(): void {
        this.light.dim(this.level);
    }
}
