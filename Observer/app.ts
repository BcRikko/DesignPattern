var weatherData = new WeatherData();
var currentConditionsDisplay = new CurrentConditionsDisplay(weatherData);
var statisticsDisplay = new StatisticsDisplay(weatherData);
var forecastDisplay = new ForecastDisplay(weatherData);
var heatIndexDisplay = new HeatIndexDisplay(weatherData);

weatherData.setMeasurements(27, 65, 30.4);
weatherData.setMeasurements(28, 70, 29.2);
weatherData.setMeasurements(26, 90, 29.2);
