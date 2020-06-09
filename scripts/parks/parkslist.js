/*
Responsible for generating a list of park HTML
representations, and putting in the browser
*/

let userStateChoice = ""
const stateDropdown = document.querySelector(".stateChoice")

stateDropdown.addEventListener("change", clickEvent => {
    userStateChoice = clickEvent.target.value

    getParkData().then(() => {
    // Iterate the collection of park objects
    for (let i=0; i<nationalParkCollection.data.length; i++) {

        // Convert the current park to its HTML representation
        const parkHTML = parkDropdownConverter(nationalParkCollection.data[i])

        // Find the <article> element in index.html
        const parkArticleElement = document.querySelector(".national__Park__Dropdown")

        // Put the park HTML representation inside the <article> element
        parkArticleElement.innerHTML += parkHTML
    }
})
}
)













// const clearParkPreview = () => contentTarget.innerHTML = ""
// const contentTarget = document.querySelector(".national-park-preview")

// stateDropdown.addEventListener("change", clickEvent => {
// //     // Get the value of the option chosen by the user
//     userStateChoice = clickEvent.target.value
//     clearParkPreview()
//     getParkData().then(
//         () => {
//             showParkChoice()
//         }
//           )
//     })

// const showParkChoice = () => {
//     // Iterate the collection of park objects
//     for (const currentparkObject of nationalParkCollection.data) {

//         // Convert the current park to its HTML representation
//         const parkHTML = parkPreviewConverter(currentparkObject)

//         // Find the <article> element in index.html
//         const parkArticleElement = document.querySelector(".national-park-preview")

//         // Put the park HTML representation inside the <article> element
//         parkArticleElement.innerHTML += parkHTML
//     }
// }

