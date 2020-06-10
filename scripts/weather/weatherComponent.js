// Variable to store extracted data from filtered array of weather objects, to be used in function to display data in DOM HTML element
let forecast = []

// Function to filter array of weather objects
const fiveDayForecast = (weatherApi) => {
  // Iterating through passed-in array of weather objects and filtering every 8th object to narrow down 5 day forecast and grabbing specific data points from each object
forecast = []

  for (let i = 0; i < weatherApi.list.length; i+= 8) {
    const desc = `<div class="weather-card"><div class="weather-date">Date: ${weatherApi.list[i].dt_txt}</div><div class=""weather-icon>Icon: ${weatherApi.list[i].weather[0].icon}</div><div class="weather-description">Description: ${weatherApi.list[i].weather[0].description}</div><div class="weather-max">Max: ${weatherApi.list[i].main.temp_max}</div><div class="weather-min">Min: ${weatherApi.list[i].main.temp_min}</div></div>`

    forecast.push(desc)
  }
}