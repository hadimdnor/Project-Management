axios
    .get('/lol') // make request to our own api since it is local link
    //.then(response => console.log(response.data))
     .then(response => response.data.forEach(task => { // after receive data 
        var taskDOM = document.querySelector('#tasks')
        
        // taskDOM parent yaaaaaa 
        taskDOM.innerHTML += `
            <div class='task'>
                <h3>Title: ${task.task_name}</h3>
                <h5>Due date: ${task.due_date}</h5>

                <a href="/details"><button>More Details</button></a>

                <hr>
            </div>
        `
    }))

