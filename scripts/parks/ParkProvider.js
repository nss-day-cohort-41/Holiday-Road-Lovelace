let nationalParkCollection = []

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
        

        /*
Responsible for generating a list of park HTML
representations, and putting in the browser
*/

