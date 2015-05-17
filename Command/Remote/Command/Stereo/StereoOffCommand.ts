class StereoOffCommand implements ICommand {
    private stereo: Stereo;

    constructor(stereo: Stereo) {
        this.stereo = stereo;
    }

    execute(): void {
        this.stereo.off();
    }
}
