class LivingroomLightOffCommand implements ICommand {
    private light: Light;

    constructor(light: Light) {
        this.light = light;
    }

    execute(): void {
        this.light.off();
    }
}
