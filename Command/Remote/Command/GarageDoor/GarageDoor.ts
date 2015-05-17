class GarageDoor {
    private location = '';

    constructor(location: string) {
        this.location = location;
    }

    up(): void {
        console.log(this.location + ' のガレージのドアは上がっています');
    }

    down(): void {
        console.log(this.location + ' のガレージのドアは下がっています');
    }

    stop(): void {
        console.log(this.location + ' のガレージのドアは止まっています');
    }

    lightOn(): void {
        console.log(this.location + ' のガレージの照明はついています');
    }

    lightOff(): void {
        console.log(this.location + ' のガレージの照明は消えています');
    }
}
