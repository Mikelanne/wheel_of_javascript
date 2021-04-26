const baseURL = 'http://localhost:3000'
const charactersURL = baseURL + '/characters'
const cardContainer = document.querySelector("#character-cards")
const groupContainter = document.querySelector(".group-container")


// function getCharacters() {
//     fetch('http://localhost:3000/characters')
//     .then(response => response.json())
//     .then(data => renderCharacters(data))
// }


CharacterApi.getCharacters()


// function renderCharacters(charResponse) {
//     const characters = charResponse.data
//     characters.forEach(char => {
//         const card = document.createElement("div")
//         const avatar = char.attributes.image
//         const img = document.createElement("img")
//         const header = document.createElement("h2")
//         // const edit = document.createElement("button")
//         // const del = document.createElement("button")
//         const headerTwo = document.createElement("h4")
//         // edit.innerText = "Edit"
//         // del.innerText = "Delete"
//         card.className = "card"
//         card.id = char.id
//         img.src = avatar
//         img.className = "character-avatar"
//         cardContainer.appendChild(card)
//         header.innerText = `${char.attributes.name}`
//         card.append(header)
//         card.append(img)
//         card.addEventListener("click", displayBackOfCard)
            

//         function displayBackOfCard(event) {
//             const card = event.currentTarget
//             if (card.className === "card") {
//                 img.remove()
//                 header.innerHTML =`${char.attributes.name}<br>`
//                 headerTwo.innerHTML = `<i>${char.attributes.title}</i>`
//                 const p = document.createElement("p")
//                 p.className = "card-text"
//                 p.innerHTML = `ta'veren: <i>${char.attributes.ta_veren}</i> <br>
//                 Home: <i>${char.attributes.home}</i> <br>
//                 Abilites: <i>${char.attributes.abilities}</i>`
//                 card.append(headerTwo)
//                 card.append(p)
//                 // card.append(edit)
//                 // card.append(del)
//                 card.className = "card-back"
//             } else {
//                 const p = document.querySelector("p")
//                 p.remove()
//                 headerTwo.remove()
//                 // edit.remove()
//                 // del.remove()
//                 card.className = "card"
//                 card.id = char.id
//                 img.src = avatar
//                 img.className = "character-avatar"
//                 cardContainer.appendChild(card)
//                 header.innerText = `${char.attributes.name}`
//                 card.append(header)
//                 card.append(img)
//             }
//         }
//         })
//     }


// function getLocations() {
//     fetch('http://localhost:3000/locations')
//     .then(response => response.json())
//     .then(data => renderLocations(data))
// }

// getLocations()

// function renderLocations(localResponse) {
//     console.log(localResponse)
//     const local = localResponse.data
//     local.forEach(place => {
//         const a = document.createElement('a')
//         const locationBar = document.querySelector(".sidenav")
//         a.setAttribute('href', `#${place.attributes.name}` )
//         a.innerHTML = `${place.attributes.name}<br><br>`
//         locationBar.append(a)
//         a.addEventListener("click", displayLocation)

//         function displayLocation(e) { 
//             if (a.innerHTML === `${place.attributes.name}<br><br>`) {
//                 a.innerText = `${place.attributes.name}: ruled by ${place.attributes.leader}. ${place.attributes.description}`
//             } else {
//                 a.innerHTML = `${place.attributes.name}<br><br>`
//             }
//         }
//         })
//     }


// function getGroups() {
//     fetch('http://localhost:3000/groups')
//     .then(response => response.json())
//     .then(data => renderGroups(data))
// }

// getGroups()

// function renderGroups(groupResponse) {
//     const groups = groupResponse.data
//     groups.forEach(group => {
//         const groupName = group.attributes.name
//         const button = document.createElement("button")
//         button.innerText = groupName
//         groupContainter.append(button)
//                 // button.addEventListener("click", sortCharactersByGroup)

//                 // function sortCharactersByGroup(e) {
//                 //     const selectedGroup = e.currentTarget.innerText
//                 //     console.log(e)
//                 //     debugger
//                 // }
//         })
//     }