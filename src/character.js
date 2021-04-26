class Character {

    static all = []

    static container = document.querySelector("#character-cards")

    constructor({id, name, ta_veren, abilities, title, home, group_id, image}){
        this.id = id
        this.name = name
        this.ta_veren = ta_veren
        this.abilities = abilities
        this.title = title
        this.home = home
        this.groupId = group_id
        this.image = image

        // this.element = document.createElement("div")
        // this.element.className = "card"
        // this.element.id = `character-${id}`
        // this.element.dataset.id = id

        // Character.all.push(this)
    }
}