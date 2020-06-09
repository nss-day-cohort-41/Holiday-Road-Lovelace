let eateryCollection = []
 
const getEateryData = () => {
    return fetch("http://holidayroad.nss.team/eateries").then (
        (response) => {
            return response.json()
        }
    )
    .then(
        (arrayOfEatery) => {
            eateryCollection = arrayOfEatery
            return arrayOfEatery
        }
    )
    
}



