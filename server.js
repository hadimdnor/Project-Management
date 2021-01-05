const express = require('express')
let app = express()
const port = 3001

app.set('view engine', 'ejs')

app.use(express.static('public'))

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

app.get('/register', function(req,res){
    res.render('register')
})


app.get('/mainpage', (request,response) => {
    var num1 = 5 
    var num2 = 10
    var sum = num1 + num2
    response.render('index', { sum: sum })
})

app.get('/api/project_management', (request,response) => {
    run_sql('SELECT * FROM ' , db_response => {
        response.json(db_response.rows)
    })
})






app.listen(port, function(){
    console.log(`listen to port ${port}`)
})