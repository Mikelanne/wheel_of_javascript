const baseURL = 'http://localhost:3000'
const charactersURL = baseURL + '/characters'
const cardContainer = document.querySelector("#character-cards")
const groupContainter = document.querySelector(".group-container")
const locationContainer = document.querySelector(".sidenav")



CharacterApi.getCharacters()
LocationApi.getLocations()
GroupApi.getGroups()