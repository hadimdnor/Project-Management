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
app.get('/tasks', (request,response) => {
    response.render('task') //give back the HTML file => in ejs file
})

app.get('/details', (request, response) => {
    response.render('details')
})

app.get('/api/project_management', (request,response) => {
    run_sql('SELECT * FROM tasks' , db_response => {
        response.json(db_response.rows)
    })
})