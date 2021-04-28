class Group {

    static all = []

    constructor({id, name, description}){
        this.id = id
        this.name = name
        this.description = description


        this.element = document.createElement("button")
        this.element.innerText = `${this.name}`
        this.element.id = `group-${this.id}`
        this.element.dataset.id = id

        Group.all.push(this)

        this.renderGroups()
    }

    renderGroups(){
        groupContainter.append(this.element)
    }


}