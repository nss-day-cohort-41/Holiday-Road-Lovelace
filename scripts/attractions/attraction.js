
const attractionDropdownConverter = (attractionObject) => {
  const attractionDropdownHTML = `
  <option value=${attractionObject.id}>${attractionObject.name}</option>
  `
  return attractionDropdownHTML
}


const attractionPreviewConverter = (attractionObject) => {

  const attractionHTMLRepresentation = `
      <article class="attractionCard">
              <section class="attractionName"><div>${attractionObject.name}</div>
              </section> 
      </article>`

  return attractionHTMLRepresentation
}
