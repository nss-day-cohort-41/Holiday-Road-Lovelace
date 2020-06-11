
const eateryDropdownConverter = (eateryObject) => {
      const eateryDropdownHTML = `
      <option value=${eateryObject.id}>${eateryObject.businessName}</option>
      
        </article>
      `
      return eateryDropdownHTML
    }
    
    
    const eateryPreviewConverter = (eateryObject) => {
    
      const eateryHTMLRepresentation = `
          <article class="eateryCard">
                  <section class="eateryName"><div>${eateryObject.businessName}</div>
                  </section> 
                  <button type="button" class="eatery__details__button">Details</button>
          </article>`
    
      return eateryHTMLRepresentation
    }
