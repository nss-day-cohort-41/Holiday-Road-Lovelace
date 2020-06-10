// Function fetches weather data from API according to user selected park
function weather(current) {

// API URL Components
const apiKey = API.weatherKey;
const lat = parseFloat(current.latitude).toFixed(2);
const lon = parseFloat(current.longitude).toFixed(2);
const units = "imperial";
const apiURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

  // Object housing fetch method and weather data array
  const weatherApi = {
    weatherData: [],
    getWeatherData() {
      return fetch(apiURL)
        .then(response => {return response.json()})
        .then(arrayOfData => {
          
          this.weatherData = arrayOfData
          return arrayOfData
        })
    }
  }

  // Invoking fetch method in weatherApi object 
  weatherApi.getWeatherData().then(
    (response) => {

      // Invoking fiveDayForecast function and passing-in array of weather data objects to begin the filter process
      fiveDayForecast(response)

      // Invoking displayForecast function to display forecast array of objects in DOM HTML element
      displayForecast()
  }
)
}



