
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


    static sendPatch(character){

        let {name, ta_veren, abilities, title, home} = character
        const characterInfo = {
            name,
            ta_veren,
            abilities,
            title,
            home
        }

        const configObj = {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(characterInfo)
        }

        fetch(`${this.baseURL}/${character.id}`, configObj)
        .then(r => r.json())
        .then(json => {
            debugger
            character.renderCards()
        })
    }

}