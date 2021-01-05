axios
    .get('/api/project_management') // make request to our own api since it is local link
    .then(response => response.data.forEach(service => { // after receive data 
        var servicesDOM = document.querySelector('#services')
        
        // servicesDOM parent yaaaaaa 
        servicesDOM.innerHTML += `
            <div class='service'>
                <h3>${service.task_name}</h3>
                <h5>${service.due_date}</h5>
                <h5>${service.details}</h5>
            </div>
        `
    }))