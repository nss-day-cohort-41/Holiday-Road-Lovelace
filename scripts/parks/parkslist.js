/*
Responsible for generating a list of park HTML
representations, and putting in the browser
*/

// This places parks into the dropdown menu filtered from the selected state
let userInputChoiceParks = []
let userStateChoice = ""

const clearParkPulldown = () => nationalStateTarget.innerHTML = "<option>Choose Your Park</option>"
const nationalStateTarget = document.querySelector(".national__Park__Dropdown")

const stateDropdown = document.querySelector(".stateChoice")


stateDropdown.addEventListener("change", clickEvent => {
    userStateChoice = clickEvent.target.value
    clearParkPulldown()
    getParkData().then(() => {
        sortByUserInput(nationalParkCollection)
    // Iterate the collection of park objects
    for (const currentparkObject of userInputChoiceParks) {

        // Convert the current park to its HTML representation
        const parkHTML = parkDropdownConverter(currentparkObject)

        // Find the <article> element in index.html
        const parkArticleElement = document.querySelector(".national__Park__Dropdown")

        // Put the park HTML representation inside the <article> element
        parkArticleElement.innerHTML += parkHTML
    }
    document.getElementById("bizarre-dropdown").removeAttribute("disabled")
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
            directions(parkToDisplay);
            weather(targetNationalPark)           
                }          
            }
          )
    
let itinerary = {
    "name": "",
    "natPark": "",
    "attraction": "",
    "eatery": ""
}

let toDatabase = ""
const showParkChoice = () => {
    // Iterate the collection of park objects
    // for (const currentparkObject of nationalParkCollection.data) {
        // Convert the current park to its HTML representation
        const parkHTML = parkPreviewConverter(targetNationalPark)

        // Find the <article> element in index.html
        const parkArticleElement = document.querySelector(".national-park-preview")

        // Put the park HTML representation inside the <article> element
        parkArticleElement.innerHTML = parkHTML
    let natParkButtonEventListener = document.querySelector(".natPark__details__button")
        natParkButtonEventListener.addEventListener("click", clickEvent => {
                showParkDetails()
        }
        )
    let natParkButtonHoursListener = document.querySelector(".natPark__hours__button")
        natParkButtonHoursListener.addEventListener("click", clickEvent => {
                showParkHours()
        }
        )
    let natParkButtonEventsListener = document.querySelector(".natPark__events__button")
        natParkButtonEventsListener.addEventListener("click", clickEvent => {
                showParkEvents()
        }
        )
    }

    let saveButtonListener = document.querySelector(".save")
      
        saveButtonListener.addEventListener("click", clickEvent => {
            
            let tripName = document.getElementById("tripName")

            
            itinerary.name = tripName.value;
            itinerary.natPark = targetNationalPark;
            itinerary.attraction = targetAttraction;
            itinerary.eatery = targetEatery;

            let trip = asideCreater(itinerary)
            document.querySelector(".savedItinerary__list").innerHTML += trip

            toDatabase = JSON.stringify(itinerary)
            saveItinerary(toDatabase).then(() => {
                return
            })
            tripName.value = ""
            itinerary = {
                "name": "",
                "natPark": "",
                "attraction": "",
                "eatery": ""
            }
        }
    )
    

// This is the park details page generator

const showParkDetails = () => {
    let windowDetails = `${targetNationalPark.fullName}
     ${targetNationalPark.description}
     Weather: ${targetNationalPark.weatherInfo}
     Located in or near ${targetNationalPark.addresses[1].city}, ${targetNationalPark.addresses[1].stateCode}`

    window.alert(windowDetails)
}
const showParkHours = () => {
    let windowDetails = `${targetNationalPark.fullName}
     Hours of operation : 
     Monday     ${targetNationalPark.operatingHours[0].standardHours.monday}
     Tuesday    ${targetNationalPark.operatingHours[0].standardHours.tuesday}
     Wednesday  ${targetNationalPark.operatingHours[0].standardHours.wednesday}
     Thursday   ${targetNationalPark.operatingHours[0].standardHours.thursday}
     Friday     ${targetNationalPark.operatingHours[0].standardHours.friday}
     Saturday   ${targetNationalPark.operatingHours[0].standardHours.saturday}
     Sunday     ${targetNationalPark.operatingHours[0].standardHours.sunday}
     
     ${targetNationalPark.operatingHours[0].description}
     
     ${targetNationalPark.entranceFees[0].description}
     `

    window.alert(windowDetails)
}
const showParkEvents = () => {
    getParkEventData().then(() => {
        if (userParkEvents.data[0] == null ) {
            let windowDetails = `${targetNationalPark.fullName}
            Sorry, there are no upcoming events scheduled at this time.`
            window.alert(windowDetails)
        }
        else { makeParkEvent()
    
            window.alert(windowDetails)

        }

    
        }
    )
}

const asideCreater = (object) => {
     let img = document.getElementById('park-photo').src
    return `
    <div class="card">
    <div class="card-img-top">
        <img src=${img} class="card-pic" alt="beautiful picture" >
    </div>
    <h1>${object.name}</h1>
    <p>${object.natPark.name}</p>
</div>
    `
}
let windowDetails = ``
let windowBuilder = ``

const makeParkEvent = () => {
    windowBuilder = ``
    for (let i=0; i < 2; i++) {
        if (userParkEvents.data[i] == null) {

        }
        
        else if (userParkEvents.data[i].isfree === "true") {
            windowBuilder += `${userParkEvents.data[i].date}   From ${userParkEvents.data[i].times[0].timestart} to ${userParkEvents.data[i].times[0].timeend}  This event is free
            ${userParkEvents.data[i].location}
            ${userParkEvents.data[i].description}
            
            `
        }

        else if (userParkEvents.data[i].isfree === "false") {
            windowBuilder += `${userParkEvents.data[i].date}   From ${userParkEvents.data[i].times[0].timestart} to ${userParkEvents.data[i].times[0].timeend}  This event costs $${feeinfo}
            ${userParkEvents.data[i].location}
            ${userParkEvents.data[i].description}

            `
        }


    }
      let windowFinal = `${targetNationalPark.fullName}
    Upcoming Events
    ${windowBuilder}
    `
        windowDetails = windowFinal
       return windowDetails
}

const sortByUserInput = () => {
    userInputChoiceParksBuilder = []
    userInputChoiceParks = []
    let userInputRV = document.getElementById("RV_Camping").checked;
    let userInputCamping = document.getElementById("Camping").checked;
    let userInputDriving = document.getElementById("Scenic_Driving").checked;
    if ( userInputRV !== true && userInputCamping !== true && userInputDriving !== true) {
        userInputChoiceParks = nationalParkCollection.data
        return userInputChoiceParks
    }
    else if (userInputCamping === true) {
        for (park of nationalParkCollection.data) {
            for (activities of park.activities) {
                if (activities.name === "Camping")  {
                    userInputChoiceParksBuilder.push(park)
                }  
            }
            
        }
    }
    else if (userInputRV === true) {
        for (park of nationalParkCollection.data) {
            for (activities of park.activities) {
                if (activities.name === "Camping")  {
                    continue
                }
                else if (activities.name === "RV Camping")  {
                    userInputChoiceParksBuilder.push(park)
                }  
            }
            
        }
    }
    else if (userInputDriving === true) {
        for (park of nationalParkCollection.data) {
            for (activities of park.activities) {
                if (activities.name === "Camping")  {
                    continue
                }
                else if (activities.name === "RV Camping")  {
                    continue
                }
                else if (activities.name === "Scenic Driving")  {
                    userInputChoiceParksBuilder.push(park)
                }  
            }
            
        }
    }
    
    userInputChoiceParks = userInputChoiceParksBuilder
            return userInputChoiceParks

}
