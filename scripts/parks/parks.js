/*
    This function will convert a single park object to an
    HTML representation and return it
*/
const parkPreviewConverter = (parkObject) => {

    const parkHTMLRepresentation = `
        <article class="national-park-card">
                <img class="park__Photo" src="${parkObject.images[0].url}"
                    alt="${parkObject.images[0].altText}"/>
                <section class="park"><strong>${parkObject.fullName}</strong><br>"${parkObject.description}<br>Coordinates ${parkObject.latLong}”
                </section> 
        </article>`

    return parkHTMLRepresentation
}

const parkDropdownConverter = () => {
    const parkDropdownHTML = `
    <option value="${nationalParkCollection.data.parkCode}">${nationalParkCollection.data.fullName}</option>
    `
    return parkDropdownHTML
}