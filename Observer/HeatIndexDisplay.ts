class HeatIndexDisplay implements IObserver, IDisplayElement {
    private _weatherData: ISubject;

    private _heatIndex = 0;

    constructor(weatherData: ISubject) {
        this._weatherData = weatherData;
        this._weatherData.registerObserver(this);
    }

    update(temperature: number, humidity: number, pressure: number): void {
        this._heatIndex = this.computeHeatIndex(temperature, humidity);
        this.display();
    }

    display(): void {
        var heatIndex = Math.round(this._heatIndex * 1000) / 1000;
        console.log('熱指数：' + heatIndex);
    }

    private computeHeatIndex(t: number, rh: number): number {
        return ((16.923 + (0.185212 * t) + (5.37941 * rh) - (0.100254 * t * rh)
            + (0.00941695 * (t * t)) + (0.00728898 * (rh * rh))
            + (0.000345372 * (t * t * rh)) - (0.000814971 * (t * rh * rh)) +
            (0.0000102102 * (t * t * rh * rh)) - (0.000038646 * (t * t * t)) + (0.0000291583 *
            (rh * rh * rh)) + (0.00000142721 * (t * t * t * rh)) +
            (0.000000197483 * (t * rh * rh * rh)) - (0.0000000218429 * (t * t * t * rh * rh)) +
            0.000000000843296 * (t * t * rh * rh * rh)) -
            (0.0000000000481975 * (t * t * t * rh * rh * rh)));
    }
}
