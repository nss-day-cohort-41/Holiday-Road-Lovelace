// Variable to store extracted data from filtered array of weather objects, to be used in function to display data in DOM HTML element
let forecast = []

// Function to filter array of weather objects
const fiveDayForecast = (weatherApi) => {

  // Iterating through passed-in array of weather objects and filtering every 8th object to narrow down 5 day forecast and grabbing specific data points from each object
  // Clears forecast array at start of function
  forecast = []

  for (let i = 0; i < weatherApi.list.length; i+= 8) {

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const d = new Date(`${weatherApi.list[i].dt_txt}`);
    const dayName = days[d.getDay()];

    const desc = `<div class="weather-card"><div class="weather-date"><h2>${dayName}</h2></div><div class=""weather-icon><img src="http://openweathermap.org/img/wn/${weatherApi.list[i].weather[0].icon}@2x.png"></div><div class="weather-description">${weatherApi.list[i].weather[0].description}</div><div class="weather-max"><h3>High: ${weatherApi.list[i].main.temp_max}&deg;</h3></div><div class="weather-min"><h3>Low: ${weatherApi.list[i].main.temp_min}&deg;</h3></div></div>`

    forecast.push(desc)
  }
}