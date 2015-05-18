class StereoOnCommand implements ICommand {
    private stereo: Stereo;

    constructor(stereo: Stereo) {
        this.stereo = stereo;
    }

    execute(): void {
        this.stereo.on();
    }
    
    undo():void{
        this.stereo.off();
    }
}
