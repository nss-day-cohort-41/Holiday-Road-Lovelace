// const attractionConverter = (attractionObject) => {
//     const attractionHTMLRepresentation = `
//     <option value="${attractionObject.name}">${attractionObject.name}</option>
      
//     </div>`
 
//     return attractionHTMLRepresentation 
// }
document.getElementById("bizarre-dropdown").addEventListener("change", e=>{
    console.log(e.target.value)
})

let attractionDropdown = $('#bizarre-dropdown');

attractionDropdown.empty();

attractionDropdown.append(`<option selected= "true" disabled>Choose Attraction</option>`);
attractionDropdown.prop('selectedIndex', 0);

const attractionUrl = 'http://holidayroad.nss.team/bizarreries';

// Populate dropdown with list of eateries
$.getJSON(attractionUrl, function (data) {
    $.each(data, function (key, attractionObject) {
      attractionDropdown.append($('<option></option>').attr('value', attractionObject.name).text(attractionObject.name));
    })
  });