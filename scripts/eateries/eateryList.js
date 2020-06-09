const eateryPreviewList = () => {
    // Iterate the collection of taco objects
    for (const currentEateryObject of eateryCollection) {
 
        // Convert the current object to its HTML representation
        const eateryHTML = eateryPreviewCard(currentEateryObject)
 
        // Find the <article> element in index.html
        const eateryArticleElement = document.querySelector(".eatery-preview")
 
        // Put the taco HTML representation inside the <article> element
        eateryArticleElement.innerHTML += eateryHTML
    }
}
