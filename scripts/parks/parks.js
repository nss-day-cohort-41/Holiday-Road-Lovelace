/*
    This function will convert a single park object to an
    HTML representation and return it
*/
const parkPreviewConverter = (parkObject) => {

    const parkHTMLRepresentation = `
        <article class="national-park-card">
                <img class="park__Photo" src="${parkObject.images[0].url}"
                    alt="${parkObject.images[0].altText}"/>
                <section class="park"><strong>${parkObject.fullName}</strong></section>
                <div>
                <button type="button" class="natPark__details__button">Details</button>
                <button type="button" class="natPark__hours__button">Hours</button>
                <button type="button" class="natPark__events__button">Events</button>
                </div>
        </article>`

    return parkHTMLRepresentation
}

const parkDropdownConverter = (parkObject) => {
    const parkDropdownHTML = `
    <option value="${parkObject.parkCode}">${parkObject.fullName}</option>
    `
    return parkDropdownHTML
}


const parkBigPopupHTMLConverter = (parkObject, parkEventObject) => {
    
    // Park name section 
    const parkBigDetailsHTML = `
        <div class="bigPark__Header">
            <img class="park__Photo" src="${parkObject.images[0].url}"
            alt="${parkObject.images[0].altText}"/>
            <section class="park"><strong>${parkObject.fullName}</strong></section>
        </div>    
            `
    // Park details section 
    const detailsHTML = `
        <div class="bigPark__Details">
            <h3>Park Details<h3>
            <p>Weather: <br>${parkObject.weatherInfo}<br>Located in or near ${parkObject.addresses[1].city}, ${parkObject.addresses[1].stateCode}</p>
        </div
`
    parkBigDetailsHTML += detailsHTML

    // Park hours of operation 
    const parkHoursOfOperationHTML = `
    <div class="operationHours">
        <h3>Hours of operation<h3>
        <p>Monday     ${parkObject.operatingHours[0].standardHours.monday}<br>Tuesday    ${parkObject.operatingHours[0].standardHours.tuesday}<br>Wednesday  ${parkObject.operatingHours[0].standardHours.wednesday}<br>Thursday   ${parkObject.operatingHours[0].standardHours.thursday}<br>Friday     ${parkObject.operatingHours[0].standardHours.friday}<br>Saturday   ${parkObject.operatingHours[0].standardHours.saturday}<br>Sunday     ${parkObject.operatingHours[0].standardHours.sunday}<br>${parkObject.operatingHours[0].description}<br>${parkObject.entranceFees[0].description}</p>
    </div>    
        `
        parkBigDetailsHTML += parkHoursOfOperationHTML

    // Upcoming park events 
    if (parkEventObject.data[0] == null ) {
        let eventWindowHTML = `
        <div class="park__Events">
            <h3>Upcoming events</h3>
            <p>Sorry, there are no upcoming events scheduled at this time.</p>
        </div>`
    }
    else {
        for (let i=0; i < 2; i++) {
            if (parkEventObject.data[i] == null) {}

            else if (parkEventObject.data[i].isfree === "true") {
               let eventWindowHTML = `
                <div class="park__Events">
                    <h3>Upcoming events</h3>
                    <p>${parkEventObject.data[i].date}  From ${parkEventObject.data[i].times[0].timestart} to ${parkEventObject.data[i].times[0].timeend}  This event is free<br>${parkEventObject.data[i].location}` + parkEventObject.data[i].description + `</p>
                </div>`
                }   
            else if (parkEventObject.data[i].isfree === "false") {  
                let eventWindowHTML = `
                <div class="park__Events">
                    <h3>Upcoming events</h3>
                    <p>${parkEventObject.data[i].date}  From ${parkEventObject.data[i].times[0].timestart} to ${parkEventObject.data[i].times[0].timeend}  This event costs $${feeinfo}<br>${parkEventObject.data[i].location}` + parkEventObject.data[i].description + `</p>
                </div>`
                }     
        }
    }  
}


    

