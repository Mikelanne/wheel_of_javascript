
class LocationApi {
    static baseURL = 'http://localhost:3000/locations'

    static getLocations() {
        fetch(this.baseURL)
        .then(response => response.json())
        .then(data => {
            data["data"].forEach(location => {
                const place = new Location({id: location.id, ...location.attributes})
            })
        })
    }

    static createLocation() {

        const formData = {
            name: locationNameInput.value,
            leader: locationLeaderInput.value,
            description: locationDescriptionInput.value 
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
            const location = data.data
            const l = new Location({id: location.id, ...location.attributes})
        })
    }
}
