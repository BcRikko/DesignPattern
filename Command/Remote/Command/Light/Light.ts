class Light {
    private location = '';

    constructor(location: string) {
        this.location = location;
    }

    on(): void {
        console.log(this.location + ' の照明はついています');
    }

    off(): void {
        console.log(this.location + ' の照明は消えています');
    }
}
