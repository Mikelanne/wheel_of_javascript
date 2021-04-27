
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

}