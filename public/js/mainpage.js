axios
    .get('/api/project_management/users') // make request to our own api since it is local link
    //.then(response => console.log(response.data))
     .then(response => response.data.forEach(users => { // after receive data 
        var membersDOM = document.querySelector('#members')
        
        // taskDOM parent yaaaaaa 
        membersDOM.innerHTML += `
            <h5>${users.email}</h5>
            <hr>
        `
        
    }))


