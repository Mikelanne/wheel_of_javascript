// const baseURL = 'http://localhost:3000'
// const charactersURL = baseURL + '/characters'
// const locationsURL = baseURL + '/locations'
// const groupsURL = baseURL + '/groups'


// const cardContainer = document.querySelector("#character-cards")
// const groupContainter = document.querySelector(".group-container")
// const locationBar = document.querySelector(".sidenav")

// const nameInput = document.getElementById("name")
// const titleInput = document.getElementById("title")
// const abilitiesInput = document.getElementById("abilities")
// const nameInput = document.getElementById("name")

// function getCharacters() {
//     fetch("http://localhost:3000/characters")
//     .then(response => response.json())
//     .then(data => renderCharacters(data))
// }

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
//         // card.className = "card"
//         // card.id = char.id
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
//     })
// }

// getCharacters()