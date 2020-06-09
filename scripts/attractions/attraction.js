const attractionConverter = (attractionObject) => {
    const attractionHTMLRepresentation = `
    <option value="${attractionObject.name}">${attractionObject.name}</option>
      
    </div>`
 
    return attractionHTMLRepresentation 
}