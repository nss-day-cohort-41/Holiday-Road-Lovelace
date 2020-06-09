/*
    This function will convert a single park object to an
    HTML representation and return it
*/
const parkConverter = (parkObject) => {

    const parkHTMLRepresentation = `
        <article class="national-park-card">
                <img class="park__Photo" src="${parkObject.images[0].url}"
                    alt="${parkObject.images[0].altText}"/>
                <section class="park">“${parkObject.description}”
                </section> 
        </article>`

    return parkHTMLRepresentation
}

