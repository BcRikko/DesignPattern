class Hottub {
    private power: boolean;
    private _temperature: number;

    on(): void {
        this.power = true;
    }

    off(): void {
        this.power = false;
    }

    bubblesOn(): void {
        if (this.power) {
            console.log('お風呂は泡立っています');
        }
    }

    bubblesOff(): void {
        if (this.power) {
            console.log('お風呂は泡立っていません');
        }
    }

    jetsOn(): void {
        if (this.power) {
            console.log('ジェットバスの電源が入っています');
        }
    }

    jetsOff(): void {
        if (this.power) {
            console.log('ジェットバスの電源が入っていません');
        }
    }

    set temperature(temperature: number) {
        this._temperature = temperature;
    }

    heat(): void {
        this._temperature = 40;
        console.log('お風呂の温度を40度に温めます');
    }

    cool(): void {
        this._temperature = 36;
        console.log('お風呂の温度を36度に冷まします');
    }

}
