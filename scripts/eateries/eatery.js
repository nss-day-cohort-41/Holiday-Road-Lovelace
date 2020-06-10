
const eateryDropdownConverter = (eateryObject) => {
      const eateryDropdownHTML = `
      <option value=${eateryObject.id}>${eateryObject.businessName}</option>
      `
      return eateryDropdownHTML
    }
    
    
    const eateryPreviewConverter = (eateryObject) => {
    
      const eateryHTMLRepresentation = `
          <article class="eateryCard">
                  <section class="eateryName"><div>${eateryObject.businessName}</div>
                  </section> 
          </article>`
    
      return eateryHTMLRepresentation
    }
