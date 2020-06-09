const eateryList = () => {
    // Iterate the collection of taco objects
    for (const currentEateryObject of eateryCollection) {
 
        // Convert the current object to its HTML representation
        const eateryHTML = eateryConverter(currentEateryObject)
 
        // Find the <article> element in index.html
        const eateryArticleElement = document.querySelector("#eatery-dropdown")
 
        // Put the taco HTML representation inside the <article> element
        eateryArticleElement.innerHTML += eateryHTML
    }
}
