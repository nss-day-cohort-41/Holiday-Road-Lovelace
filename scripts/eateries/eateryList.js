const eateryDropdownList = (eateryCollection) => {
    // Find the <article> element in index.html
    const eateryDropdownArticleElement = document.querySelector("#eatery-dropdown")
    const emptyEateryDropdownStart = "<option>Choose Eatery</option>"

    eateryDropdownArticleElement.innerHTML = emptyEateryDropdownStart
    for (const currentEateryObject of eateryCollection) {
        // Iterate the collection of taco objects
        // Convert the current object to its HTML representation
        const eateryDropdownHTML = eateryDropdownConverter(currentEateryObject)

        // Put the taco HTML representation inside the <article> element
        eateryDropdownArticleElement.innerHTML += eateryDropdownHTML
    }
    const selectedEateryDetails = (eateryObject) => {
        for (const eateryObject of eateryCollection) {
         if (selectedEatery === eateryObject.id) {
             selectedEatery.push(eateryObject)
         }
         return selectedEatery
    }
}

let targetEatery
let userEateryChoice
let selectedEatery = []
const contentEateryTarget = document.querySelector(".eatery-preview")
const clearEateryPreviewList = () => contentEateryTarget.innerHTML = ""
const eateryDropdown = document.querySelector("#eatery-dropdown")

eateryDropdown.addEventListener("change", changeEateryEvent => {
    const selectedEateryDetails = (eateryObject) => {
        for (const eateryObject of eateryCollection) {
         if (selectedEatery === eateryObject.id) {
             selectedEatery.push(eateryObject)
         }
         return selectedEatery
    }
}

            userEateryChoice = parseInt(changeEateryEvent.target.value)

            clearEateryPreviewList()
            
            selectedEatery.forEach 
            for (const eateryObject of eateryCollection) {
                if (userEateryChoice === eateryObject.id) {
                    targetEatery = eateryObject

                    let eateryPreviewHTML = eateryPreviewConverter(targetEatery)


                    contentEateryTarget.innerHTML += eateryPreviewHTML
                    
                    let eateryButtonListener = document.querySelector(".eatery__details__button")

                    eateryButtonListener.addEventListener("click", clickEvent => {
                            showEateryDetails()
                        })
                    }
                }
                document.getElementById("tripName").classList = ""
                document.getElementById("tripName").addEventListener("input", (e) => {
                    document.getElementById("save").removeAttribute("disabled")
                })
            })


        const showEateryDetails = () => {
            let eateryWindowDetails = `${targetEatery.businessName}
     Description: ${targetEatery.description}
     Wi-Fi? ${targetEatery.ameneties.wifi}
     Restrooms? ${targetEatery.ameneties.restrooms}`

            window.alert(eateryWindowDetails)
        }

        const details = () => {
            selectedEateryDetails()
        }

        // each eatery.id selected goes into array. for each loop could loop through to display each selected eatery