const { response } = require('express')
const express = require('express')
const router = express.Router()
const run_sql = require('../db')


// app.get('/lol', (request,response) => {
//     run_sql('SELECT * FROM tasks', db_response => {
//         response.json(db_response.rows)
//         //response.render('task')
//     })
//     //response.render('task') //give back the HTML file
// })

//Get the json data, using run_sql function
//Just create own API => just a route that talks to our db
router.get('/tasks', (request,response) => {
    response.render('task') //give back the HTML file => in ejs file
})

router.get('/details/:id', (request, response) => {
    var task_id = request.params.id

    run_sql('SELECT * FROM tasks WHERE id = $1', [task_id], db_response =>{ 
        var task_details = db_response.rows[0]

        response.render('details', { task_id: task_id , task_details: task_details })
    })
  
})

router.patch('/edit/:task_id', (request, response) => {
    var staff_id = request.session.userId
    var task_id = request.params.task_id
    run_sql('UPDATE tasks SET staff_id = $1 WHERE id = $2', [staff_id , task_id], db_response => {
        response.redirect('/mainpage')
    })
})


router.get('/api/project_management', (request,response) => {
    run_sql('SELECT * FROM tasks' , db_response => {
        response.json(db_response.rows)
    })
})

module.exports = router