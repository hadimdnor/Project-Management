axios
    .get('/api/project_management') // make request to our own api since it is local link
    //.then(response => console.log(response.data))
     .then(response => response.data.forEach(task => { // after receive data 
        var taskDetailDOM = document.querySelector('#content')
        
        // taskDOM parent yaaaaaa 
        taskDetailDOM.innerHTML += `cod
            <div class='list'>
                <h5>Title: ${task.task_name}</h5>
                <p>Due date: ${task.due_date}</p>
                <p>Due date: ${task.details}</p>

                <a href="/personalpage"><button>Add to my Bucket</button></a>
            </div>
        `
    }))
