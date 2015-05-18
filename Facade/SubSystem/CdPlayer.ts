class CdPlayer {
    private description: string;
    private currentTrack: number;
    private amplifier: Amplifier;
    private title: string;

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

    eject(): void {
        this.title = null;
        console.log(this.description + 'からCDを取り出します')
    }

    play(title: string): void;
    play(track: number): void;
    play(value: any): void {
        if (typeof value === 'number') {
            if (this.title === null) {
                console.log(this.description + 'でトラック' + value + 'を再生できません。CDが挿入されていません。');
            } else {
                this.currentTrack = value;
                console.log(this.description + 'でトラック' + value + 'を再生します');
            }
        } else {
            this.title = value;
            this.currentTrack = 0;
            console.log(this.description + 'で\"' + value + '\"を再生します');
        }
    }

    stop(): void {
        this.currentTrack = 0;
        console.log(this.description + 'の再生を止めます')
    }

    pause(): void {
        console.log(this.description + 'で\"' + this.title + '\"をポーズします');
    }

    toString(): string {
        return this.description;
    }
}
