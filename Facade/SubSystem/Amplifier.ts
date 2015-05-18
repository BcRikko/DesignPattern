class Amplifier {
    private description: string;
    private tuner: Tuner;
    private dvd: DvdPlayer;
    private cd: CdPlayer

    constructor(description: string) {
        this.description = description;
    }

    on(): void {
        console.log(this.description + 'の電源を入れます');
    }

    off(): void {
        console.log(this.description + 'の電源を切ります');
    }

    setStereoSound(): void {
        console.log(this.description + 'をステレオモードにします');
    }

    setSurroundSound(): void {
        console.log(this.description + 'をサラウンドモードにします（5.1ch）');
    }

    setVolume(level: number) {
        console.log(this.description + 'のボリュームを' + level + 'に設定します');
    }

    setTuner(tuner: Tuner) {
        console.log(this.description + 'のチューナーを' + tuner.toString() + 'に設定します');
        this.tuner = tuner;
    }

    setDvd(dvd: DvdPlayer) {
        console.log(this.description + 'のDVDプレイヤーに' + dvd.toString() + 'に設定します');
        this.dvd = dvd;
    }

    setCd(cd: CdPlayer) {
        console.log(this.description + 'のCDプレイヤーに' + cd.toString() + 'に設定します');
        this.cd = cd;
    }

    toString(): string {
        return this.description;
    }
}
