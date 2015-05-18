class Tuner {
    private description: string;
    private amplifier: Amplifier;
    private _frequency: number;

    constructor(description: string, amplifier: Amplifier) {
        this.description = description;
        this.amplifier = amplifier;
    }

    on(): void {
        console.log(this.description + 'の電源を入れます');
    }

    off(): void {
        console.log(this.description + 'の電源を切ります');
    }

    set frequency(frequency: number) {
        console.log(this.description + 'の周波数を' + frequency + 'に合わせます');
        this._frequency = frequency;
    }

    setAm(): void {
        console.log(this.description + 'をAMモードに設定します');
    }

    setFm(): void {
        console.log(this.description + 'をFMモードに設定します');
    }

    toString(): string {
        return this.description;
    }
}
