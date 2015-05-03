class StatisticsDisplay implements IObserver, IDisplayElement {
    private _weatherData: ISubject;

    private _minTemp = 25;  // デフォルト気温を25℃に設定
    private _maxTemp = 25;  // デフォルト気温を25℃に設定
    private _sumTemp = 0;
    private _recordCount = 0;

    constructor(weatherData: ISubject) {
        this._weatherData = weatherData;
        this._weatherData.registerObserver(this);
    }

    update(temperature: number, humidity: number, pressure: number): void {
        if (this._minTemp > temperature) {
            this._minTemp = temperature;
        }
        if (this._maxTemp < temperature) {
            this._maxTemp = temperature;
        }

        this._sumTemp += temperature;
        this._recordCount++;
        this.display();
    }

    display(): void {
        console.log('平均/最高/最低気温：' + this._sumTemp / this._recordCount + '/' + this._maxTemp + '/' + this._minTemp);
    }
}
