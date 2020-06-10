// Iterate through weatherData array to filter through every 8th object to narrow down to 5 days and grab specific data points in each object.
const forecast = []
const fiveDayForecast = () => {

  for (let i = 0; i < weatherApi.weatherData.list.length; i+= 8) {
    const desc = `<div class="weather-card"><div class="weather-date">Date: ${weatherApi.weatherData.list[i].dt_txt}</div><div class=""weather-icon>Icon: ${weatherApi.weatherData.list[i].weather[0].icon}</div><div class="weather-description">Description: ${weatherApi.weatherData.list[i].weather[0].description}</div><div class="weather-max">Max: ${weatherApi.weatherData.list[i].main.temp_max}</div><div class="weather-min">Min: ${weatherApi.weatherData.list[i].main.temp_min}</div></div>`

    forecast.push(desc)
  }
}