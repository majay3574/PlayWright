// Define WeatherType enum
enum WeatherType {
    Sunny,
    Rainy,
    Windy,
    Cloudy,
    Snowy
}

let weeklyForecast: WeatherType[] = [
    WeatherType.Cloudy,
    WeatherType.Sunny,
    WeatherType.Snowy,
    WeatherType.Windy,
    WeatherType.Rainy,
    WeatherType.Sunny,
    WeatherType.Windy
];

function displayForecast() {
    for (let i = 0; i < weeklyForecast.length; i++) {
        console.log(`Day ${i + 1}: ${WeatherType[weeklyForecast[i]]}`);
    }
}


displayForecast();
