class HomeTheaterFacade {
    private amp: Amplifier;
    private tuner: Tuner;
    private dvd: DvdPlayer;
    private cd: CdPlayer;
    private projector: Projector;
    private lights: TheaterLights;
    private theaterScreen: TheaterScreen;
    private popper: PopcornPopper;

    constructor(amp: Amplifier,
        tuner: Tuner,
        dvd: DvdPlayer,
        cd: CdPlayer,
        projector: Projector,
        theaterScreen: TheaterScreen,
        lights: TheaterLights,
        popper: PopcornPopper) {

        this.amp = amp;
        this.tuner = tuner;
        this.dvd = dvd;
        this.cd = cd;
        this.projector = projector;
        this.theaterScreen = theaterScreen;
        this.lights = lights;
        this.popper = popper;
    }

    watchMovie(movie: string): void {
        console.log('映画を見る準備をします');
        this.popper.on();
        this.popper.pop();
        this.lights.dim(10);
        this.theaterScreen.down();
        this.projector.on();
        this.projector.wideScreenMode();
        this.amp.on();
        this.amp.setDvd(this.dvd);
        this.amp.setSurroundSound();
        this.amp.setVolume(5);
        this.dvd.on();
        this.dvd.play(movie);
    }

    endMovie(): void {
        console.log('ムービーシアターを停止します');
        this.popper.off();
        this.lights.on();
        this.theaterScreen.up();
        this.projector.off();
        this.amp.off();
        this.dvd.stop();
        this.dvd.eject();
        this.dvd.off();
    }

    listenToCd(cdTitle: string): void {
        console.log('音楽を聞く準備をします');
        this.lights.on();
        this.amp.on();
        this.amp.setVolume(5);
        this.amp.setCd(this.cd);
        this.amp.setStereoSound();
        this.cd.on();
        this.cd.play(cdTitle);
    }

    endCd(): void {
        console.log('CDを停止します');
        this.amp.off();
        this.amp.setCd(this.cd);
        this.cd.eject();
        this.cd.off();
    }

    listenToRadio(frequency: number): void {
        console.log('ラジオのチューニングをします');
        this.tuner.on();
        this.tuner.frequency = frequency;
        this.amp.on();
        this.amp.setVolume(5);
        this.amp.setTuner(this.tuner);
    }

    endRadio(): void {
        console.log('ラジオを停止します');
        this.tuner.off();
        this.amp.off();
    }
}
