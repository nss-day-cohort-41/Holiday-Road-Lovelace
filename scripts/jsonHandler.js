


const saveItinerary = () => {

    // console.log(toDatabase)
    fetch("http://localhost:8088/itineraries", {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: toDatabase
        }
    )
}
