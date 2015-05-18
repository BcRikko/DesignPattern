class TheaterLights {
    private description: string;

    constructor(description: string) {
        this.description = description;
    }

    on(): void {
        console.log(this.description + 'の照明をつけます');
    }

    off(): void {
        console.log(this.description + 'の照明を消します');
    }

    dim(level: number): void {
        console.log(this.description + 'の照明を' + level + '%まで暗くします');
    }

    toString(): string {
        return this.description;
    }
}
