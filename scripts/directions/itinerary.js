let intineraryCard = (obj)=>{
    return `<div class="itinerary">
    <p>Distance:${obj.distance}</p>
    <h1>${obj.text}</h1>
    <p>${obj.time}</p>

    </div>`
}
const itineraryAppender = (object) => {
    
   for(let i = 0; i < object.instructions.length;i++){
       let direction = object.instructions[i]
       let directionCard = intineraryCard(direction)
       document.getElementById('saved-itinerary').innerHTML+=directionCard;
   }
}