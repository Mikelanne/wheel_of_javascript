
class CharacterApi {
    static baseURL = 'http://localhost:3000/characters'


    static getCharacters() {
        fetch(this.baseURL)
        .then(response => response.json())
        .then(data => {
            data["data"].forEach(character => {
                const char = new Character({id: character.id, ...character.attributes})
            })
        })
    }

    static createCharacter() {

        const formData = {
            name: nameInput.value,
            title: titleInput.value,
            home: homeInput.value,
            abilities: abilitiesInput.value,
            ta_veren: taverenInput.value
        }

        const configObj = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify(formData)
        }

        fetch(this.baseURL, configObj)
        .then(r => r.json())
        .then(data => {
            const character = data.data 
            const c = new Character({id: character.id, ...character.attributes})

            c.renderCards()
        })
    }


    // static sendPatch(character){

    //     let {name, ta_veren, abilities, title, home} = character
    //     const characterInfo = {
    //         name,
    //         ta_veren,
    //         abilities,
    //         title,
    //         home
    //     }

    //     const configObj = {
    //         method: 'PATCH',
    //         headers: {
    //             "Content-Type": "application/json",
    //             Accept: "application/json"
    //         },
    //         body: JSON.stringify(characterInfo)
    //     }

    //     fetch(`${this.baseURL}/${character.id}`, configObj)
    //     .then(r => r.json())
    //     .then(json => {
    //         debugger
    //         character.renderCards()
    //     })
    // }

}