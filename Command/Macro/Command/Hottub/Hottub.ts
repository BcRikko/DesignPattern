class Hottub {
    private power: boolean;
    private _temperature: number;

    on(): void {
        this.power = true;
    }

    off(): void {
        this.power = false;
    }

    circulate(): void {
        if (this.power) {
            console.log('お風呂は泡立っています');
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
        if(this._temperature < temperature){
            console.log('お風呂の温度を' + temperature + '度に温めます');
        }else{
            console.log('お風呂の温度を' + temperature + '度に冷まします');
        }
        this._temperature = temperature;
    }
}
