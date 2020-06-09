let userEaterChoice = ""
const eateryTypeDropdown = document.getElementById("eatery-dropdown")
const eateryContentTarget = document.querySelector(".eatery-preview")

const clearUserEaterChoice = () => eateryContentTarget.innerHTML = ""

eateryTypeDropdown.addEventListener("change", eateryChangeEvent => {
       userEaterChoice = eateryChangeEvent.target.value
    
})

      

getEateryData().then(
  () => {
    eateryDropdownList()
  }
)

// bring in eatery API and leave initial dropdown empty

const eateryDropdownConverter = (eateryObject) => {
 
  const eateryDropdownHTMLRepresentation = `<option value="${eateryObject.businessName}">${eateryObject.businessName}</option>`

  return eateryDropdownHTMLRepresentation

}




// return selector from dropdown to fill in preview return function
getEateryData().then((response) =>{
  clearUserEaterChoice()
  eateryPreviewList(response)
  console.log(response)
}
)

const eateryPreviewCardConverter = (eateryObject) => {
    console.log(eateryObject)
  const eateryHTMLRepresentation = `
    <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
  <div class="card-header">${eateryObject.city}, ${eateryObject.state}</div>
  <div class="card-body">
    <h5 class="card-title">${eateryObject.businessName}</h5>
    <p class="card-text">${eateryObject.description}</p>
  </div>
</div>`
 

    return eateryHTMLRepresentation 
}