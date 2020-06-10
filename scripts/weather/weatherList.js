// Iterate through the forecast array and display each object in the HTML DOM element.
const displayForecast = () => {
  for (const currentObject of forecast) {
    const weatherDiv = document.querySelector(".weather-container")
    weatherDiv.innerHTML += currentObject
  }
}