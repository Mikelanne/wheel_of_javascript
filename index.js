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
            card.addEventListener("click", displayBackOfCard)

            function displayBackOfCard(event) {
                const card = event.currentTarget
                if (card.className === "card") {
                    img.remove()
                    header.innerText =`${char.attributes.name} 
                    ${char.attributes.title}`
                    const p = document.createElement("p")
                    p.innerText = `ta'veren: ${char.attributes.ta_veren}
                    Home: ${char.attributes.home}
                    Abilites: ${char.attributes.abilities}`
                    card.append(p)
                    card.className = "card-back"
                } else {
                    const p = document.querySelector("p")
                    p.remove()
                    card.className = "card"
                    card.id = char.id
                    img.src = avatar
                    img.className = "character-avatar"
                    cardContainer.appendChild(card)
                    header.innerText = `${char.attributes.name}`
                    card.append(header)
                    card.append(img)
                }
            }
        })
    }