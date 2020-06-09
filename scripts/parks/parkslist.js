/*
Responsible for generating a list of park HTML
representations, and putting in the browser
*/
let userChoice = ""
const stateDropdown = document.querySelector(".stateChoice")

const clearParkList = () => contentTarget.innerHTML = ""
const contentTarget = document.querySelector(".national-park-preview")

stateDropdown.addEventListener("change", clickEvent => {
//     // Get the value of the option chosen by the user
    userChoice = clickEvent.target.value
    clearParkList()
    getParkData().then(
        () => {
            parkList()
        }
          )
    })

const parkList = () => {
    // Iterate the collection of park objects
    for (const currentparkObject of nationalParkCollection.data) {

        // Convert the current park to its HTML representation
        const parkHTML = parkConverter(currentparkObject)

        // Find the <article> element in index.html
        const parkArticleElement = document.querySelector(".national-park-preview")

        // Put the park HTML representation inside the <article> element
        parkArticleElement.innerHTML += parkHTML
    }
}
