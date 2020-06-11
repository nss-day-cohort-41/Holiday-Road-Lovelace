/*
Responsible for generating a list of park HTML
representations, and putting in the browser
*/

// This places parks into the dropdown menu filtered from the selected state

let userStateChoice = ""

const clearParkPulldown = () => nationalStateTarget.innerHTML = "<option>Choose Your Park</option>"
const nationalStateTarget = document.querySelector(".national__Park__Dropdown")

const stateDropdown = document.querySelector(".stateChoice")


stateDropdown.addEventListener("change", clickEvent => {
    userStateChoice = clickEvent.target.value
    clearParkPulldown()
    getParkData().then(() => {
    // Iterate the collection of park objects
    for (const currentparkObject of nationalParkCollection.data) {

        // Convert the current park to its HTML representation
        const parkHTML = parkDropdownConverter(currentparkObject)

        // Find the <article> element in index.html
        const parkArticleElement = document.querySelector(".national__Park__Dropdown")

        // Put the park HTML representation inside the <article> element
        parkArticleElement.innerHTML += parkHTML
    }
})
}
)


// This places the selected park into the preview window
let targetNationalPark = []
let userNationalParkChoice = ""
const clearParkPreview = () => nationalParkPreviewTarget.innerHTML = ""
const nationalParkPreviewTarget = document.querySelector(".national-park-preview")

const nationalParkDropdown = document.querySelector(".national__Park__Dropdown")

nationalParkDropdown.addEventListener("change", clickEvent => {
//     // Get the value of the option chosen by the user
    userNationalParkChoice = clickEvent.target.value
    clearParkPreview()
    document.getElementById('map-container').innerHTML = '<div id="map" class="map-class " style="cursor: default; height:300px; width: 400px;"></div><div class="saved-itinerary " id="saved-itinerary">'
    clearWeatherList()

        // const parkToPreview = nationalParkCollection.find(park => park.parkCode === "userNationalParkChoice")
       for (const parkToDisplay of nationalParkCollection.data)
        if ( userNationalParkChoice === parkToDisplay.parkCode ) {
            targetNationalPark = parkToDisplay
            directions(parkToDisplay);
                        showParkChoice()
        //document.getElementById('map-container').innerHTML = '<div id="map" class="map-class " style="cursor: default; height:300px; width: 400px;"></div>' 
            if(document.getElementById("map-container").classList.contains("hidden")){
                document.getElementById('map-container').classList.toggle('hidden');
                }
            showParkChoice()
            weather(targetNationalPark)
        }
            
        }
          )
const showParkChoice = () => {
    // Iterate the collection of park objects
    // for (const currentparkObject of nationalParkCollection.data) {
        // Convert the current park to its HTML representation
        const parkHTML = parkPreviewConverter(targetNationalPark)

        // Find the <article> element in index.html
        const parkArticleElement = document.querySelector(".national-park-preview")

        // Put the park HTML representation inside the <article> element
        parkArticleElement.innerHTML = parkHTML
    let natParkButtonListener = document.querySelector(".natPark__details__button")


    natParkButtonListener.addEventListener("click", clickEvent => {
                showParkDetails()
        }
    )
}


// This is the park details page generator

const showParkDetails = () => {
    let windowDetails = `${targetNationalPark.fullName}
     ${targetNationalPark.description}`

    window.alert(windowDetails)
}

