
class GroupApi {
    
    static baseURL = 'http://localhost:3000/groups'

    static getGroups() {
        fetch(this.baseURL)
        .then(response => response.json())
        .then(data => {
            data["data"].forEach(group => {
                const g = new Group({id: group.id, ...group.attributes})
            })
        })
    }
}
