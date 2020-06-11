
function directions(park) {

    var container = L.DomUtil.get('map');
    if (container != null) {
        container._leaflet_id = null;
    }
    let lat = parseFloat(park.latitude).toFixed(6);
    let long = parseFloat(park.longitude).toFixed(6);
    console.log(park, "direction", lat, long)

    var osmUrl = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
        osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        osm = L.tileLayer(osmUrl, {
            maxZoom: 18,
            attribution: osmAttrib
        });
    var map = L.map('map').setView([36.174465, -86.767960], 12).addLayer(osm);

    var ghRouting = new GraphHopper.Routing({ key: "d519e0c5-db39-44c5-945c-4a8a4e6009cc", host: "https://graphhopper.com/api/1/", vehicle: "car", elevation: false });
    ghRouting.addPoint(new GHInput(36.174465, -86.767960));
    //POINTS CAN BE ADDED ghRouting.addPoint(new GHInput(33.000000, -85.000000))
    ghRouting.addPoint(new GHInput(lat, long));
    
    ghRouting.doRequest()
        .then(function (json) {
            var path = json.paths[0];
            routingLayer.addData({
                "type": "Feature",
                "geometry": path.points
            });
            return path
        }).then((res) => {
            let time = msToTime(res.time)
            let distance = getMiles(res.distance)
            console.log(time,distance)
            itineraryAppender(res)
        })
        .catch(function (err) {
            var str = "An error occured: " + err.message;
            console.log('ERROR', err.me)
        });
    L.marker({ lon: 36.174465, lat: -86.767960 }).bindPopup('The center of the world').addTo(map);
    var routingLayer = L.geoJson().addTo(map);
    routingLayer.options = {
        style: { color: "#00cc33", "weight": 5, "opacity": 0.6 }
    };



}
function msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
  
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;
  
    return `Travel Time: ${hours} Hrs, ${minutes} Min`;
  }
  function getMiles(i) {
    let miles =  parseFloat(i*0.000621371192).toFixed(2);
    return `${miles} Miles`
}
