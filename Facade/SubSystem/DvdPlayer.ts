class DvdPlayer {
    private description: string;
    private currentTrack: number;
    private amplifier: Amplifier;
    private movie: string;

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
        this.movie = null;
        console.log(this.description + 'からDVDを取り出します')
    }

    play(movie: string): void;
    play(track: number): void;
    play(value: any): void {
        if (typeof value === 'number') {
            if (this.movie === null) {
                console.log(this.description + 'でトラック' + value + 'を再生できません。DVDが挿入されていません。');
            } else {
                this.currentTrack = value;
                console.log(this.description + 'でトラック' + value + 'を再生します');
            }
        } else {
            this.movie = value;
            this.currentTrack = 0;
            console.log(this.description + 'で\"' + value + '\"を再生します');
        }
    }

    stop(): void {
        this.currentTrack = 0;
        console.log(this.description + 'の再生を止めます')
    }

    pause(): void {
        console.log(this.description + 'で\"' + this.movie + '\"をポーズします');
    }

    setTwoChannelAudio(): void {
        console.log(this.description + 'をステレオに設定する');
    }

    setSurroundAudio(): void {
        console.log(this.description + 'をサラウンドに設定する');
    }

    toString(): string {
        return this.description;
    }
}
