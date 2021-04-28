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
        this.element.addEventListener("click", this.renderBackOfCards)
    }

    renderBackOfCards = () => {
        if (this.element.className === "card") {
            this.element.className = "card-back"
            this.element.lastElementChild.remove()
            const headerTwo = document.createElement("h4")
            const p = document.createElement("p")
            headerTwo.innerHTML = `<i>${this.title}</i>`
            p.innerHTML = `ta'veren: <i> ${this.ta_veren}</i><br> Home: <i>${this.home}</i><br> Abilities: <i>${this.abilities}</i>`
            this.element.append(headerTwo)
            this.element.append(p)
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

}