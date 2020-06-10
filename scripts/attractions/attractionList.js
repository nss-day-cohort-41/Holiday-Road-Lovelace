const attractionDropdownList = (attractionCollection) => {


    // Find the <article> element in index.html
    const attractionDropdownArticleElement = document.querySelector("#bizarre-dropdown")
    const emptyAttractionDropdownStart = "<option>Choose Attraction</option>"
    attractionDropdownArticleElement.innerHTML = emptyAttractionDropdownStart
    for (const currentattractionObject of attractionCollection) {
        // Iterate the collection of taco objects
        // Convert the current object to its HTML representation
        const attractionDropdownHTML = attractionDropdownConverter(currentattractionObject)

        // Put the taco HTML representation inside the <article> element
        attractionDropdownArticleElement.innerHTML += attractionDropdownHTML
    }



}

let targetAttraction
let userAttractionChoice
const contentAttractionTarget = document.querySelector(".bizarre-preview")
const clearAttractionPreviewList = () => contentAttractionTarget.innerHTML = ""
const attractionDropdown = document.querySelector("#bizarre-dropdown")

attractionDropdown.addEventListener("change", changeAttractionEvent => {

    userAttractionChoice = parseInt(changeAttractionEvent.target.value)
    
    clearAttractionPreviewList()
    
    for (const attractionObject of attractionCollection) {

        if (userAttractionChoice === attractionObject.id) {
            targetAttraction = attractionObject

            let attractionPreviewHTML = attractionPreviewConverter(targetAttraction)


            contentAttractionTarget.innerHTML += attractionPreviewHTML

        }
    }
}
)
