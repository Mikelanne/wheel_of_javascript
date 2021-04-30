const baseURL = 'http://localhost:3000'
const charactersURL = baseURL + '/characters'
const cardContainer = document.querySelector("#character-cards")
const groupContainter = document.querySelector(".group-container")
const locationContainer = document.querySelector(".sidenav")
const form = document.querySelector("#new-character-form")

const homeInput = document.querySelector("#home")
const abilitiesInput = document.querySelector("#abilities")
const nameInput = document.querySelector("#name")
const titleInput = document.querySelector("#title")
const taverenInput = document.querySelector("#ta_veren")
const imageInput = document.querySelector("#image")
const saveCharacter = document.querySelector("#submit")

saveCharacter.addEventListener("click", handleFormSubmit)

taverenInput.addEventListener("click", () => {
    if (taverenInput.value === "false") {
        taverenInput.value = "true"
    } else {
        taverenInput.value = "false"
    }  
})

function handleFormSubmit(e){
    e.preventDefault()

    CharacterApi.createCharacter()
    form.reset() 
}



CharacterApi.getCharacters()
LocationApi.getLocations()
GroupApi.getGroups()