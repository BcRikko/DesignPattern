class WeatherData implements ISubject {
    private observers: Array<IObserver>;
    private _temperature: number;
    private _humidity: number;
    private _pressure: number;

    get temperature(): number {
        return this._temperature;
    }

    get humidity(): number {
        return this._humidity;
    }

    get pressure(): number {
        return this._pressure;
    }

    constructor() {
        this.observers = [];
    }

    registerObserver(o: IObserver): void {
        this.observers.push(o);
    }

    removeObserver(o: IObserver): void {
        var i = this.observers.indexOf(o);
        if (i >= 0) {
            this.observers.splice(i, 1);
        }
    }

    notifyObserver(): void {
        for (let i = 0; i < this.observers.length; i++) {
            var observer: IObserver = this.observers[i];
            observer.update(this._temperature, this._humidity, this._pressure);
        }
    }

    measurementsChange(): void {
        this.notifyObserver();
    }

    setMeasurements(temperature: number, huidity: number, pressure: number): void {
        this._temperature = temperature;
        this._humidity = huidity;
        this._pressure = pressure;
        this.measurementsChange();
    }
}
