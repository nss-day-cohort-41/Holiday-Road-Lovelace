// Iterate through weatherData array to filter through every 8th object to narrow down to 5 days and grab specific data points in each object.
const forecast = []
const fiveDayForecast = () => {

  for (let i = 0; i < weatherData.list.length; i+= 8) {
    const desc = `<div class="weather-card"><div class="weather-date">Date: ${weatherData.list[i].dt_txt}</div><div class=""weather-icon>Icon: ${weatherData.list[i].weather[0].icon}</div><div class="weather-description">Description: ${weatherData.list[i].weather[0].description}</div><div class="weather-max">Max: ${weatherData.list[i].main.temp_max}</div><div class="weather-min">Min: ${weatherData.list[i].main.temp_min}</div></div>`

    forecast.push(desc)
  }
}