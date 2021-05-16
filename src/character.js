class Character {

    static all = []

    constructor({id, name, ta_veren, abilities, title, home, group_id, image}){
        this.id = id
        this.name = name
        this.ta_veren = ta_veren
        this.abilities = abilities
        this.title = title
        this.home = home
        this.group_id = group_id
        this.image = image

        this.element = document.createElement("div")
        this.element.className = "card"
        this.element.id = `character-${id}`
        this.element.dataset.id = id

        Character.all.push(this)

        this.renderCards()
    }

    renderCards() {
        const avatar = this.image
        const img = document.createElement("img")
        const header = document.createElement("h2")
        img.src = avatar
        img.className = "character-avatar"
        header.innerText = `${this.name}`
        this.element.append(header)
        this.element.append(img)
        cardContainer.append(this.element)
        this.element.addEventListener("click", this.handleItemClick)
    }

    handleItemClick = (event) => {
        if (this.element.className === "card" && event.target.id !== "edit-button") {
            this.element.className = "card-back"
            this.element.lastElementChild.remove()
            const headerTwo = document.createElement("h4")
            headerTwo.className = "name"
            const p = document.createElement("p")
            const edit = document.createElement("button")
            p.id = "character-description"
            edit.innerText = "Edit"
            edit.id = "edit-button"
            headerTwo.innerHTML = `<i>${this.title}</i>`
            p.innerHTML = `ta'veren: <i class="ta_veren"> ${this.ta_veren}</i><br> Home: <i class="home">${this.home}</i><br> Abilities: <i class="abilities">${this.abilities}</i><br>`
            this.element.append(headerTwo)
            this.element.append(p)
            p.append(edit)
        } else if (this.element.className === "card-back" && event.target.id !== "edit-button" && event.target.type !== "text"){
            this.element.className = "card"
            const h4 = this.element.querySelector("h4")
            const p = this.element.querySelector("p")
            h4.remove()
            p.remove()
            const avatar = this.image
            const img = document.createElement("img")
            img.src = avatar
            img.className = "character-avatar"
            this.element.append(img)
        }
        if (event.target.id === "edit-button"){
            this.element.className = "edit-character"
            const h2 = this.element.querySelector("h2")
            const h4 = this.element.querySelector("h4")
            const p = this.element.querySelector("p")
            const avatar = this.image
            const name = h2.innerText
            const title = h4.innerText
            const save = document.createElement("button")
            save.innerText = "Save"
            save.id = "save-button"
            h2.remove()
            h4.remove()
            p.innerHTML = `<form id="edit-character-form">
            <h2><label for='name'>Name: </label> <input type='text' id='edit-name' value='${name}'></h2><br>
            <h4><label for='title'>Title: </label> <input type='text' id='edit-title' value='${title}'></h4>
            <p><label for='home'>Home: </label>
            <input type='text' id='edit-home' value='${this.home}'><br>
            <label for='abilites'>Abilities: </label>
            <input type='text' id='edit-abilities' value='${this.abilities}'><br></p>
            </form>`
            p.append(save)
            save.addEventListener("click", this.saveUpdatedCharacter)
        }
    }

    static filterByGroup(filteredGroup){
        if (filteredGroup){
            for (const character of Character.all){
                if(character.group_id === parseInt(filteredGroup.id)){
                    character.element.style.display = ""
                } else {
                    character.element.style.display = "none"
                }
            } 
        } else {
            for (const character of Character.all){
                character.element.style.display = ""
            }
        }
    }

    saveUpdatedCharacter = (e) => {

        e.preventDefault()

        this.name = this.element.querySelector("#edit-name").value
        this.title = this.element.querySelector("#edit-title").value
        this.abilities = this.element.querySelector("#edit-abilities").value
        this.home = this.element.querySelector("#edit-home").value

        CharacterApi.sendPatch(this)
    }

    saveUpdate(){
        const p = document.querySelector("p")
        const save = document.querySelector("#save-button")
        save.remove()
        p.remove()

        this.element.className = "card"

        this.renderCards()
    }


    // create a button that on click will show only the characters who are ta'veren

    static showTaveren() {
        const characters = Character.all.filter(character => character.ta_veren === true)
        Character.all.forEach(c => c.element.style.display = "none")
        for (const character of characters) {
            character.element.style.display = ""
        }
    }

}