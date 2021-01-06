axios
    .get('/api/project_management') // make request to our own api since it is local link
    //.then(response => console.log(response.data))
     .then(response => response.data.forEach(task => { // after receive data 
        var taskDetailDOM = document.querySelector('#content')
        
        // taskDOM parent yaaaaaa 
        taskDetailDOM.innerHTML += `
            <div class='list'>
                <h3>Title: ${task.task_name}</h3>
                <h5>Due date: ${task.due_date}</h5>
                <h5>Due date: ${task.details}</h5>

                <a href="/personalpage"><button>Add to my Bucket</button></a>
            </div>
        `
    }))
