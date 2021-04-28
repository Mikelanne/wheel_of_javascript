class Location {

    static all = []

    static container = document.querySelector(".sidenav")

    constructor({id, name, leader, description}) {
        this.id = id
        this.name = name
        this.leader = leader
        this.description = description

        this.element = document.createElement('a')
        this.element.setAttribute('href', `#${this.name}`)
        this.element.innerHTML = `${this.name}<br><br>`
        this.element.dataset.id = id

        this.renderLocation()
    }

    renderLocation() {
        locationContainer.append(this.element)
        this.element.addEventListener("click", this.renderLocationInfo)
    }

    renderLocationInfo = () => {
        if (this.element.innerHTML === `${this.name}<br><br>`) {
            this.element.innerText = `${this.name}: ruled by ${this.leader}. ${this.description}`
        } else {
            this.element.innerHTML = `${this.name}<br><br>`
        }
    }


}