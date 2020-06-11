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


/* <br>"${parkObject.description} */