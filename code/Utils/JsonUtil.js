export default class JsonUtil {

    static pathTextos = "./textos/"

    static convertFileJsonByName = async (name) => {
        let dados = []

       await fetch(this.pathTextos + name + ".json")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText)
                }
                return response.json();
            })
            .then(data => {
                dados = data
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error)
            })

            return dados
    }

}