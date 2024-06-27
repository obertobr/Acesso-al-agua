export default class ApiUtil {

    static getPosts = async (language, search) => {

       return await fetch(`./back-end/api.php?language=${language}&search=${search}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok ' + response.statusText)
                }
                return response.json();
            })
            .catch(error => {
                console.error('There has been a problem with your fetch operation:', error)
            })
    }

    static getPost = async (language, id) => {
        return await fetch(`./back-end/api.php?language=${language}&id=${id}`)
             .then(response => {
                 if (!response.ok) {
                     throw new Error('Network response was not ok ' + response.statusText)
                 }
                 return response.json();
             })
             .catch(error => {
                 console.error('There has been a problem with your fetch operation:', error)
             })
     }

     static addPost = async (postData) => {
        return await fetch('./back-end/api.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
    }

}