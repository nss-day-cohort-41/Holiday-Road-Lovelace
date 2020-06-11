let intineraryCard = (obj, time, distance)=>{
    return `<div class="itinerary">
    <p>Distance:${distance}</p>
    <h1>${obj.text}</h1>
    <p>${time}</p>

    </div>`
}
let savedDirectionArray = []
const itineraryAppender = (object) => {
    document.getElementById('saved-itinerary').innerHTML = "";
   for(let i = 0; i < object.instructions.length;i++){
       let current = object.instructions[i]
    let time = msToTime(current.time)
    let distance = getMiles(current.distance)
       let direction = object.instructions[i]
       let directionCard = intineraryCard(direction, time, distance)
       savedDirectionArray.push({direction,time,distance});
       document.getElementById('saved-itinerary').innerHTML+=directionCard;
   }
}