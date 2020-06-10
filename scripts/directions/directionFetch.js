let parkCoordinates = []
let itineraryData = {}
let park = "Acadia"
const getParkCorrdinates = ()=>{
    return fetch(`https://graphhopper.com/api/1/geocode?q=${park}&locale=us&debug=true&key=d519e0c5-db39-44c5-945c-4a8a4e6009cc`)
    .then(response=>response.json())
    .then(response=>{
        console.log(response.hits[0].extent, "before")
        itineraryData = response
        
        console.log(itineraryData);
        parkCoordinates = response.hits[0].extent;
      console.log(  response.hits[0].extent, "after")
      return response
    })
}