class TheaterScreen {
    private description: string;

    constructor(description: string) {
        this.description = description;
    }

    up(): void {
        console.log(this.description + 'のスクリーンを上げます');
    }

    down(): void {
        console.log(this.description + 'のスクリーンを下げます');
    }

    toString(): string {
        return this.description;
    }
}
