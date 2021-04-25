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
                    header.innerHTML =`${char.attributes.name}<br>
                    <i>${char.attributes.title}</i>`
                    const p = document.createElement("p")
                    p.className = "card-text"
                    p.innerHTML = `ta'veren: <i>${char.attributes.ta_veren}</i> <br>
                    Home: <i>${char.attributes.home}</i> <br>
                    Abilites: <i>${char.attributes.abilities}</i>`
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


fetch('http://localhost:3000/locations')
    .then(response => response.json())
    .then(data => renderLocations(data))

    function renderLocations(localResponse) {
        console.log(localResponse)
        localResponse.forEach(place => {
            const a = document.createElement('a')
            const locationBar = document.querySelector(".sidenav")
            a.setAttribute('href', `#${place.name}` )
            a.innerHTML = `${place.name}<br><br>`
            locationBar.append(a)
            a.addEventListener("click", displayLocation)

            function displayLocation(e) { 
                if (a.innerHTML === `${place.name}<br><br>`) {
                    a.innerText = `${place.name}: ruled by ${place.leader}. ${place.description}`
                } else {
                    a.innerHTML = `${place.name}<br><br>`
                }
            }
        })
    }