
const attractionDropdownConverter = (attractionObject) => {
  const attractionDropdownHTML = `
  <option value=${attractionObject.id}>${attractionObject.name}</option>
        </article>
  `
  return attractionDropdownHTML
}


const attractionPreviewConverter = (attractionObject) => {

  const attractionHTMLRepresentation = `
      <article class="attractionCard">
              <section class="attractionName"><div>${attractionObject.name}</div>
              </section> 
              <button type="button" class="attraction__details__button">Details</button>
      </article>`

  return attractionHTMLRepresentation
}
