class ForecastDisplay implements IObserver, IDisplayElement {
    private _weatherData: ISubject;

    private _lastPressure = 0;
    private _currentPressure = 0;

    constructor(weatherData: WeatherData) {
        this._weatherData = weatherData;
        this._weatherData.registerObserver(this);
    }

    update(temperature: number, humidity: number, pressure: number): void {
        this._lastPressure = this._currentPressure;
        this._currentPressure = pressure;
        this.display();
    }

    display(): void {
        var forecast: string;

        if (this._lastPressure < this._currentPressure) {
            forecast = '天候は良くなります！'
        } else if (this._lastPressure === this._currentPressure) {
            forecast = 'ほとんど同じです'
        } else {
            forecast = 'より寒く雨模様の天候に注意してください'
        }

        console.log('予報：' + forecast);
    }
}
