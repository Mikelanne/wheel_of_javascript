
class CharacterApi {
    static baseURL = 'http://localhost:3000/characters'


    static getCharacters() {
        fetch(this.baseURL)
        .then(response => response.json())
        .then(data => {
            data["data"].forEach(character => {
                const char = new Character({id: character.id, ...character.attributes})
                // renderCharacters(char)
            })
        })
    }

    // renderCharacters(char){
    //     console.log(char)
    //     debugger
    // //     // characters.forEach(char => {
    // //     //     const card = document.querySelector(".card")
    // //     //     const avatar = char.attributes.image
    // //     //     const img = document.createElement("img")
    // //     //     const header = document.createElement("h2")
    // //     //     const headerTwo = document.createElement("h4")
    // //     //     card.className = "card"
    // //     //     card.id = char.id
    // //     //     img.src = avatar
    // //     //     img.className = "character-avatar"
    // //     //     cardContainer.appendChild(card)
    // //     //     header.innerText = `${char.attributes.name}`
    // //     //     card.append(header)
    // //     //     card.append(img)
    // //     //     card.addEventListener("click", displayBackOfCard)
    // //     // })
    // }

    // renderCharacters()

}