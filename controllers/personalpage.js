const express = require('express')
const router = express.Router()
const run_sql = require('../db')

// User ejs file / route
router.get('/personalpage', (request,response) => {
    response.render('user')
})

module.exports = router