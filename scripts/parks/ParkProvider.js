let nationalParkCollection = []

const getParkData = () => {
    return fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${userChoice}&limit=1&api_key=xyrC9YRSKRALK2VM5ueEd3QIZ8Xx6xwBz4dZ3gLF`)
            .then(
                (httpResponse) => {
                    return httpResponse.json()
                }
            )
                .then(
                    (arrayOfParks) => {
                        nationalParkCollection = arrayOfParks
                    }
                )
            return nationalParkCollection
        }
        

        /*
Responsible for generating a list of park HTML
representations, and putting in the browser
*/

let userStateChoice = ""
const stateDropdown = document.querySelector(".stateChoice")

stateDropdown.addEventListener("change", clickEvent => {
    userStateChoice = clickEvent.target.value

    getParkData().then(() => {
    // Iterate the collection of park objects
    for (let i=0; i<nationalParkCollection.data.length; i++) {

        // Convert the current park to its HTML representation
        const parkHTML = parkDropdownConverter(nationalParkCollection.data[i])

        // Find the <article> element in index.html
        const parkArticleElement = document.querySelector(".national__Park__Dropdown")

        // Put the park HTML representation inside the <article> element
        parkArticleElement.innerHTML += parkHTML
    }
})
}
)