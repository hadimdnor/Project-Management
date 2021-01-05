const express = require('express')
let app = express()
const port = 3001

app.listen(port, function(){
    console.log(`listen to port ${port}`)
})

app.set('view engine', 'ejs')

app.get('/', function(req,res){
    res.render('signin')
})

app.get('/register', function(req,res){
    res.render('register')
})

app.get('/mainpage', function(req,res){
    res.render('mainpage',{user: "Hadi"})
})

const pg = require('pg')
let pool = new pg.Pool({
    database: 'project_manager'
})