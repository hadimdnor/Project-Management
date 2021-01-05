const express = require('express')
const bodyParser = require("body-parser");
const bcrypt = require('bcrypt');
let app = express()
const port = 3001

app.set('view engine', 'ejs')

app.use(express.static('public'))

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const pg = require('pg')
let pool = new pg.Pool({
    database: 'project_manager'
})

function run_sql(sql, cb){
    pool.query(sql, (err, response) => {
        cb(response)
    })
}


app.get('/', function(req,res){
    res.render('signin')
})

app.post('/login', (request,response) => {
    passport.authenticate('local', { successRedirect: '/',failureRedirect: '/login' });
    response.redirect('/mainpage')
})

app.get('/register', function(req,res){
    res.render('register')
})

app.post('/register', (request, response) => {

    response.redirect('/')
})

app.get('/mainpage', (request,response) => {
    var num1 = 5 
    var num2 = 10
    var sum = num1 + num2
    response.render('mainpage', { sum: sum })
})

app.post('/logout', (request, response) => {
    response.redirect('/')
})


app.get('/api/project_management', (request,response) => {
    run_sql('SELECT * FROM ' , db_response => {
        response.json(db_response.rows)
    })
})

app.get('/personalpage', (request,response) => {
    response.render('user')
})




app.listen(port, function(){
    console.log(`listen to port ${port}`)
})