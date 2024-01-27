/* 1) Define a Weather Enum:
    a) Create an enum named WeatherType with the following values: Sunny, Rainy, Windy, Cloudy, and Snowy.

2) Create Weather Data:
    a) Create an array named weeklyForecast that will store the weather forecast for a week.
    b) The array should contain seven elements, each representing the weather for a day of the week, using the WeatherType enum.

3) Display the Forecast:
    a) Write a function named displayForecast that iterates through the weeklyForecast array.
    b) The function should print out the weather forecast for each day in a format like: "Day 1: Sunny", "Day 2: Rainy", etc. */

enum WeatherType {
    Sunny,
    Rainy,
    Windy,
    Cloudy,
    Snowy
}
 
// Creating an array for the weekly forecast
let weeklyForecast: WeatherType[] = [
    WeatherType.Sunny,
    WeatherType.Cloudy,
    WeatherType.Rainy,
    WeatherType.Sunny,
    WeatherType.Windy,
    WeatherType.Snowy,
    WeatherType.Cloudy
];
 
function displayForecast(forecast: WeatherType[]) {
    for (let i = 0; i < forecast.length; i++) {
        console.log(`Day ${i + 1}: ${WeatherType[forecast[i]]}`);
    }
}
 
// Displaying the forecast
displayForecast(weeklyForecast);