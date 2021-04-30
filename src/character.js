class Character {

    static all = []

    constructor({id, name, ta_veren, abilities, title, home, group_id, image}){
        this.id = id
        this.name = name
        this.ta_veren = ta_veren
        this.abilities = abilities
        this.title = title
        this.home = home
        this.groupId = group_id
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
        if (this.element.className === "card") {
            this.element.className = "card-back"
            this.element.lastElementChild.remove()
            const headerTwo = document.createElement("h4")
            headerTwo.className = "name"
            const p = document.createElement("p")
            // const edit = document.createElement("button")
            // edit.innerText = "Edit"
            headerTwo.innerHTML = `<i>${this.title}</i>`
            p.innerHTML = `ta'veren: <i class="ta_veren"> ${this.ta_veren}</i><br> Home: <i class="home">${this.home}</i><br> Abilities: <i class="abilities">${this.abilities}</i><br>`
            this.element.append(headerTwo)
            this.element.append(p)
            // p.append(edit)
            this.element.addEventListener("click", this.editCharacter)
        } else {
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
    }

    static filterByGroup(filteredGroup){
        if (filteredGroup){
            for (const character of Character.all){
                if(character.groupId === parseInt(filteredGroup.id)){
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

    // createEditFields = (editButton) => {
    //     console.log(this)
    //     const card = this.element
    //     card.className = "edit-character"
    //     // const ta = this.element.querySelector(".ta_veren")
    //     const h = this.element.querySelector(".home")
    //     const ab = this.element.querySelector(".abilities")
    //     const header = this.element.querySelector("h2")
    //     const headerTwo = this.element.querySelector("h4")
    //     const button = editButton

    //     // const ta_veren = this.element.querySelector(".ta_veren").innerText
    //     const home = this.element.querySelector(".home").innerText
    //     const abilities = this.element.querySelector(".abilities").innerText
    //     const name = header.innerText
    //     const title = headerTwo.innerText

    //     header.innerHTML = `<input type="text" name="name" class="edit-name" value="${name}">`
    //     headerTwo.innerHTML = `<input type="text" name="title" class="edit-title" value="${title}">`
    //     // ta.innerHTML = `<input type="text" name="ta_veren" class="edit-ta_veren" value="${ta_veren}">`
    //     h.innerHTML = `<input type="text" name="home" class="edit-home" value="${home}">`
    //     ab.innerHTML = `<input type="text" name="abilities" class="edit-abilities" value="${abilities}">`
    //     button.innerText = "Save"

    // }

    // saveUpdatedCharacter = () => {

    //     this.name = this.element.querySelector(".edit-name").value
    //     this.title = this.element.querySelector(".edit-title").value
    //     // this.ta_veren = this.element.querySelector(".edit-ta_veren").value
    //     this.abilities = this.element.querySelector(".edit-abilities").value
    //     this.home = this.element.querySelector(".edit-home").value

    //     CharacterApi.sendPatch(this)
    // }

}