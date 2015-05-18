class Stereo {
    private location: string;

    constructor(location: string) {
        this.location = location;
    }

    on(): void {
        console.log(this.location + ' のステレオは電源が入っています');
    }

    off(): void {
        console.log(this.location + ' のステレオは電源が入っていません');
    }

    setCD(): void {
        console.log(this.location + ' のステレオにCDをセットします');
    }

    setDVD(): void {
        console.log(this.location + ' のステレオにDVDをセットします');
    }

    setRadio(): void {
        console.log(this.location + ' のステレオにラジオの設定をします');
    }

    setVolume(volume: number): void {
        console.log(this.location + ' のステレオのボリュームを' + volume + 'にセットします');
    }
}
