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
        this.addToDropDown()
    }

    addListeners() {
        this.element.addEventListener("click", this.setActiveGroup)
    }

    setActiveGroup = (e) => {
        let filteredGroup

        Group.all.forEach(g => {
            if (this.element === g.element && !this.active) {
                g.element.classList.add("activated")
                g.active = true
                filteredGroup = g
            } else {
                g.element.classList.remove('activated')
                g.active = false
            }
        })

        Character.filterByGroup(filteredGroup)
    }

    addToDropDown() {
        const group = document.createElement("option")
        group.value = this.id
        group.innerText = this.name
        groupDropdown.append(group)
    }


}