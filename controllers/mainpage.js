const express = require('express')
const router = express.Router()
const run_sql = require('../db')

router.get('/mainpage', (request,response) => {
    var num1 = 5 
    var num2 = 10
    var sum = num1 + num2
    
    run_sql('SELECT * FROM users WHERE id = $1', [request.session.userId], db_response => {    
        // Output db_response.rows[0]
            // {
            //     id: 1,
            //     username: 'hehe',
            //     email: 'hehe@gmail.com',
            //     password_digest: '123'
        // }
        var email = db_response.rows[0].email
        
        run_sql('SELECT * FROM tasks', [] ,db_response2 => {
            // db_response.rows[0]
            var tasks = db_response2.rows
            console.log(tasks)
            // Output of db_response.rows[n].task_name = iterate n to change task
            // {
            //     id: 2,
            //     task_name: 'Task 1 - Tic Tac Toe',
            //     due_date: '2021 January 10',
            //     staff_id: null,
            //     details: "Let's start out with something fun - a game!"
            // }
            
            response.render('mainpage', { email: email , tasks: tasks })
            
        })
        
    })
    
    
})

module.exports = router