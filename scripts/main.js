// Invoke the getWeatherData function to fetch data from openWeatherAPI
getWeatherData().then(() => {
  // Invoke the fiveDayForecast function to begin the filter process
  fiveDayForecast()
  // Invoke the displayForecast function to display forecast objects in DOM
  displayForecast()
})
