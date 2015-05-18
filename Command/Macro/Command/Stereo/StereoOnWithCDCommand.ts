class StereoOnWithCDCommand implements ICommand {
    private stereo: Stereo;

    constructor(stereo: Stereo) {
        this.stereo = stereo;
    }

    execute(): void {
        this.stereo.on();
        this.stereo.setCD();
        this.stereo.setVolume(11);
    }
    
    undo():void{
        this.stereo.off();
    }
}
