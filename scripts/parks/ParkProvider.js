let nationalParkCollection = []

const getParkData = () => {
    return fetch(`https://developer.nps.gov/api/v1/parks?stateCode=${userChoice}&limit=1&api_key=xyrC9YRSKRALK2VM5ueEd3QIZ8Xx6xwBz4dZ3gLF`)
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
            return nationalParkCollection
        }
        