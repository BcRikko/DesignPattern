class Light {
    private location: string;
    private _level: number;

    constructor(location: string) {
        this.location = location;
    }

    on(): void {
        this._level = 100;
        console.log('照明はついています');
    }

    off(): void {
        this._level = 0;
        console.log('照明は消えています');
    }

    dim(level: number) {
        this._level = level;
        if (level == 0) {
            this.off();
        } else {
            console.log('照明の明るさは' + level + '%です');
        }
    }

    get level(): number {
        return this._level;
    }
}
