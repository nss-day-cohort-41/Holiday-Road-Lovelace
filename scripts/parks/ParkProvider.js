let nationalParkCollection = []
let userParkEvents = []

const getParkData = () => {
    return fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${userStateChoice}&limit=4&api_key=${API.npsKey}`)
            .then(
                (httpResponse) => {
                    return httpResponse.json()
                }
            )
                .then(
                    (arrayOfParks) => {
                        nationalParkCollection = arrayOfParks
                    }
                )
        }
        
const getParkEventData = () => {
    return fetch(`https://developer.nps.gov/api/v1/events?parkCode=${targetNationalPark.parkCode}&limit=2&api_key=${API.npsKey}`)
            .then(
                (eventResponse) => {
                return eventResponse.json()
            }
        )
            .then((arrayOfEvents) => {
                userParkEvents = arrayOfEvents
            console.log(userParkEvents)}
        )
        
}
        /*
Responsible for generating a list of park HTML
representations, and putting in the browser
*/

