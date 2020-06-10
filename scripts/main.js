// getParkData().then(
//     () => {
//         parkList()
//     }
// )

  // Invoke the getWeatherData method in weatherApi object to fetch data from openWeatherAPI
  weatherApi.getWeatherData().then(
    () => {
      // Invoke the fiveDayForecast function to begin the filter process
      fiveDayForecast()
      // Invoke the displayForecast function to display forecast objects in DOM
      displayForecast()
      console.log(weatherApi.weatherData)
  }
)
