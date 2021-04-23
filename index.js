const cardContainer = document.querySelector("#character-cards")

fetch('http://localhost:3000/characters')
    .then(response => response.json())
    .then(data => renderCharacters(data))

    function renderCharacters(charResponse) {
        const characters = charResponse.data
        characters.forEach(char => {
            const card = document.createElement("div")
            const avatar = char.attributes.image
            const img = document.createElement("img")
            const header = document.createElement("h2")
            card.className = "card"
            card.id = char.id
            img.src = avatar
            img.className = "character-avatar"
            cardContainer.appendChild(card)
            header.innerText = `${char.attributes.name}`
            card.append(header)
            card.append(img)
        })
      
    }