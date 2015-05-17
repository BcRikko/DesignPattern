class TV {
    private location: string;
    private channel: number;

    constructor(location: string) {
        this.location = location;
    }

    on(): void {
        console.log('テレビはついています');
    }

    off(): void {
        console.log('テレビは消えています');
    }

    setInputChannel() {
        this.channel = 3;
        console.log('チャンネルをVCRにセットします');
    }
}
