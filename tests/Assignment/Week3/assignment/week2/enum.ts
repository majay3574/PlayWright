// Define Weather enum
enum WeatherType {
    Sunny,
    Rainy,
    Windy,
    Cloudy,
    Snowy
}

// Create Weather Data
const weeklyForecast: WeatherType[] = [
    WeatherType.Sunny,
    WeatherType.Rainy,
    WeatherType.Windy,
    WeatherType.Cloudy,
    WeatherType.Snowy,
    WeatherType.Sunny,
    WeatherType.Rainy
];


function displayForecast(forecast: WeatherType[]): void {
    forecast.forEach((weather, index) => {
        console.log(`Day ${index + 1}: ${WeatherType[weather]}`);
    });
}

displayForecast(weeklyForecast);
