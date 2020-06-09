const eateryTypeDropdown = document.getElementById("eatery-dropdown")

const userEaterChoice = document.addEventListener("change", f =>{
    return f.target.value
})

let eateryDropdown = $('#eatery-dropdown');

eateryDropdown.empty();

eateryDropdown.append(`<option selected= "true" disabled>Choose Eatery</option>`);
eateryDropdown.prop('selectedIndex', 0);

const eateryUrl = 'http://holidayroad.nss.team/eateries';

// Populate dropdown with list of eateries
$.getJSON(eateryUrl, function (data) {
    $.each(data, function (key, eateryObject) {
      eateryDropdown.append($('<option></option>').attr('value', eateryObject.businessName).text(eateryObject.businessName));
    })
  });



// return selector from dropdown to fill in preview return function
const eateryPreviewCard = (eateryChoiceObject) => {
    const eateryHTMLRepresentation = `
    <div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
  <div class="card-header">${eateryChoiceObject.city}, ${eateryChoiceObject.state}</div>
  <div class="card-body">
    <h5 class="card-title">${eateryChoiceObject.businessName}</h5>
    <p class="card-text">${eateryChoiceObject.description}</p>
    <p class="card-text">Restroom: ${eateryChoiceObject.ameneties.restrooms}</p>
  </div>
</div>`
 
    return eateryHTMLRepresentation 
}
if (userEaterChoice === "any") {
    return eateryPreviewCard ()
}
