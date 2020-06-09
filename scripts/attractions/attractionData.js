let attractionCollection = []
 
const getAttractionData = () => {
    return fetch("http://holidayroad.nss.team/bizarreries").then (
        (response) => {
            return response.json()
        }
    )
    .then(
        (arrayOfAttraction) => {
            attractionCollection = arrayOfAttraction
        }
    )
    
}
getAttractionData().then(
    () => {
        attractionList()
    }
)


