// Function iterating through the forecast array of filtered weather objects and displaying each object in the DOM HTML element.
const displayForecast = () => {
  for (const currentObject of forecast) {
    const weatherDiv = document.querySelector(".weather-container")
    weatherDiv.innerHTML += currentObject
  }
}

// Function to clear weather list 
const weatherContainer = document.querySelector(".weather-container")
const clearWeatherList = () => weatherContainer.innerHTML = ""
