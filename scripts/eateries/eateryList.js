const eateryDropdownList = () => {
    // Iterate the collection of taco objects
    for (const currentEateryObject of eateryCollection) {
 
        // Convert the current object to its HTML representation
        const eateryDopdownHTML = eateryDropdownConverter(currentEateryObject)
 
        // Find the <article> element in index.html
        const eateryDropdownArticleElement = document.querySelector("#eatery-dropdown")
 
        // Put the taco HTML representation inside the <article> element
        eateryDropdownArticleElement.innerHTML += eateryDopdownHTML
    }
}

const eateryPreviewList = (userEaterChoice) => {
    // Iterate the collection of taco objects
    for (const currentEateryObject of userEaterChoice) {
 
        // Convert the current object to its HTML representation
        const eateryPreviewHTML = eateryPreviewCardConverter(currentEateryObject)
 
        // Find the <article> element in index.html
        const eateryPreviewArticleElement = document.querySelector(".eatery-preview")
 
        // Put the taco HTML representation inside the <article> element
        eateryPreviewArticleElement.innerHTML += eateryPreviewHTML
    }
}
