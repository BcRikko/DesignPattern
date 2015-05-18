class Projector {
    private description: string;
    private dvdPlayer: DvdPlayer;

    constructor(description: string, dvdPlayer: DvdPlayer) {
        this.description = description;
        this.dvdPlayer = dvdPlayer;
    }

    on(): void {
        console.log(this.description + 'の電源を入れます')
    }

    off(): void {
        console.log(this.description + 'の電源を切ります')
    }

    wideScreenMode(): void {
        console.log(this.description + 'はワイドスクリーンモード（16:9）です')
    }

    tvMode(): void {
        console.log(this.description + 'はテレビモード（4:3）です')
    }

    toString(): string {
        return this.description;
    }
}
