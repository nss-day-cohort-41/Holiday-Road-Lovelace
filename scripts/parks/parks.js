/*
    This function will convert a single park object to an
    HTML representation and return it
*/
const parkPreviewConverter = (parkObject) => {

    const parkHTMLRepresentation = `
        <article class="national-park-card">
                <img class="park__Photo" id="park-photo" src="${parkObject.images[0].url}"
                    alt="${parkObject.images[0].altText}"/>
                <section class="park"><strong>${parkObject.fullName}</strong></section>
                <button type="button" class="natPark__details__button">Details</button>
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