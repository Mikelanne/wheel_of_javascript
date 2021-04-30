class Group {

    static all = []

    constructor({id, name, description}){
        this.id = id
        this.name = name
        this.description = description
        this.active = false


        this.element = document.createElement("button")
        this.element.innerText = `${this.name}`
        this.element.id = `group-${this.id}`
        this.element.dataset.id = id

        Group.all.push(this)

        this.renderGroups()
    }

    renderGroups(){
        groupContainter.append(this.element)
        this.addListeners()
    }

    addListeners() {
        this.element.addEventListener("click", this.setActiveGroup)
    }

    setActiveGroup = (e) => {
        debugger
    }


}