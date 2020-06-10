const apiKey = "47e208e9402a2f88a5e94911b23e141f"
const lat = 36.17;
const lon = -86.78;
const units = "imperial";
const apiURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=${units}`;

const weatherApi = {
  weatherData: [],
  getWeatherData() {
    return fetch(apiURL)
      .then(response => {return response.json()})
      .then(arrayOfData => {this.weatherData = arrayOfData})
  }
}

