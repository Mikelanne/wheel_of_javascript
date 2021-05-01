const baseURL = 'http://localhost:3000'
const charactersURL = baseURL + '/characters'
const cardContainer = document.querySelector("#character-cards")
const groupContainter = document.querySelector(".group-container")
const locationContainer = document.querySelector(".sidenav")
const characterForm = document.querySelector("#new-character-form")
const locationForm = document.querySelector("#new-location-form")
// const locationForm = document.querySelector(".new-location-form")

const homeInput = document.querySelector("#home")
const abilitiesInput = document.querySelector("#abilities")
const nameInput = document.querySelector("#name")
const titleInput = document.querySelector("#title")
const taverenInput = document.querySelector("#ta_veren")
const imageInput = document.querySelector("#image")
const saveCharacter = document.querySelector("#submit")
const newGroup = document.querySelector("#newGroup_id")


const locationNameInput = document.querySelector("#locationName")
const locationLeaderInput = document.querySelector("#locationLeader")
const locationDescriptionInput = document.querySelector("#locationDescription")

const saveLocation = document.querySelector("#locationSubmit")

saveLocation.addEventListener("click", handleLocationFormSubmit)

const groupDropdown = document.querySelector("#group_id")

saveCharacter.addEventListener("click", handleCharacterFormSubmit)

taverenInput.addEventListener("click", () => {
    if (taverenInput.value === "false") {
        taverenInput.value = "true"
    } else {
        taverenInput.value = "false"
    }  
})

function handleCharacterFormSubmit(e){
    e.preventDefault()

    CharacterApi.createCharacter()
    characterForm.reset() 
}

function handleLocationFormSubmit(e){
    e.preventDefault()

    LocationApi.createLocation()
    locationForm.reset()
}

// function addFormButton(){
//     const button = document.createElement("button") 
//     button.id = "new-location-form"
//     button.innerText = "I discovered new land."
//     button.addEventListener("click", renderLocationForm)
//     locationContainer.append(button)
// }

// addFormButton()

// function renderLocationForm(){
//     console.log("hello")
// }



CharacterApi.getCharacters()
LocationApi.getLocations()
GroupApi.getGroups()