const express = require('express')
const router = express.Router()
const run_sql = require('../db')

// User ejs file / route
router.get('/personalpage', (request, response) => {
    var userId = request.session.userId
    var userName = request.session.userName
    // console.log(request.session)

    run_sql('SELECT * FROM tasks WHERE staff_id = $1', [userId], db_response => {
        var tasks = db_response.rows
        
        response.render('user', { userId: userId, userName: userName, tasks: tasks })
    })
})


module.exports = router