
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
}