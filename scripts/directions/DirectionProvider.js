
function directions(park){
    let lat = parseFloat(park.latitude).toFixed(6);
    let long = parseFloat(park.longitude).toFixed(6);
    console.log(park, "direction",lat,long)
getParkCorrdinates().then(e=>{
   
var osmUrl = 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
osmAttrib = '&copy; <a href="http://openstreetmap.org/copyright">OpenStreetMap</a> contributors',
osm = L.tileLayer(osmUrl, {
    maxZoom: 18,
    attribution: osmAttrib
});

var map = L.map('map').setView([36.174465, -86.767960], 12).addLayer(osm);

var ghRouting = new GraphHopper.Routing({key: "d519e0c5-db39-44c5-945c-4a8a4e6009cc", host: "https://graphhopper.com/api/1/", vehicle: "car", elevation: false});
ghRouting.addPoint(new GHInput(36.174465, -86.767960));
ghRouting.addPoint(new GHInput(lat, long));

ghRouting.doRequest()
   .then(function (json) {
   
       var path = json.paths[0];
       
       routingLayer.addData({
           "type": "Feature",
           "geometry": path.points
       });
       return path
   }).then((res)=>{
    itineraryAppender(res);
   })
   .catch(function (err) {
       var str = "An error occured: " + err.message;
      console.log('ERROR', err.me)
   });
    L.marker({lon: 36.174465, lat: -86.767960}).bindPopup('The center of the world').addTo(map);
var routingLayer = L.geoJson().addTo(map);
routingLayer.options = {
style: {color: "#00cc33", "weight": 5, "opacity": 0.6}
};
    
})
}
//    <!-- <script>
// var map = L.map('map', {
//     center: [51.505, -0.09],
//     zoom: 13
// });
//         var OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
// 	maxZoom: 19,
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map)

// console.log(map)


//     </script> -->
//     <!--                -->
//     <!--
//     <script type="module">
        
//         window.onload = function() {
//             console.log('Hopper Running')
//           var ghRouting = new GraphHopper.Routing({
//             key: "d519e0c5-db39-44c5-945c-4a8a4e6009cc",
//             vehicle: "car",
//             elevation: false
//           });
      
//           ghRouting.addPoint(new GHInput(47.400905, 8.534317));
//           ghRouting.addPoint(new GHInput(47.394108, 8.538265));
      
//           ghRouting.doRequest()
//             .then(function(json) {
//                 console.log(json)
//                 var map = L.map('map', {
//     center: [51.505, -0.09],
//     zoom: 13
// });
    
//         var OpenStreetMap_Mapnik = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
// 	maxZoom: 19,
//     attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
// }).addTo(map)
// L.ghRouting({
//     waypoints: [
//         L.latLng(57.74, 11.94),
//         L.latLng(57.6792, 11.949)
//     ],
//     router: L.router,
//     routeWhileDragging: true
// }).addTo(map);

// console.log(map, "M", OpenStreetMap_Mapnik, "OSM")
//               console.log(json);
//             })
//             .catch(function(err) {
//               console.error(err.message);
//             });
      
      
//         };
//       </script>
//     -->