class PopcornPopper {
    private description: string;

    constructor(description: string) {
        this.description = description;
    }

    on(): void {
        console.log(this.description + 'の電源を入れる');
    }

    off(): void {
        console.log(this.description + 'の電源を切る');
    }

    pop(): void {
        console.log(this.description + 'がポップコーンを作っています');
    }

    toString(): string {
        return this.description;
    }
}
