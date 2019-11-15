const express = require('express')
// const mysql = require('mysql2')
const {join} = require('path')
const app = express()

const db = require('./connection')
//DATABASE CONNECTION now handled by connection/index.js
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'password',
//   database: 'burgers_db'
// })

app.use(express.static(join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('views', join(__dirname, 'views'))
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


//ROUTES
app.get('/', (req, res)=>{
  res.render('index')
})

//SHOW (get) burgers
app.get('/burgers', (req, res)=>{
  db.query(`SELECT * FROM burgers`, (e, burgers)=>{
    if (e) console.log(e)
    res.json(burgers) //this is the method for sending data to the front end.
  })
})

//CREATE (post) a burger
//We probably don't need to pass in whether or not it's been eaten (keep default FALSE).
app.post('/burgers', (req, res)=>{
  db.query(`INSERT INTO burgers (name, eaten) VALUES ('${req.body.name}', ${req.body.eaten})`, e=>{
    if (e) {console.log(e)}
    res.sendStatus(200) 
  })
})

//Toggle "eaten" (put)
app.put('/burgers/:id', (req, res)=>{
  db.query(`UPDATE burgers SET eaten = ${req.body.eaten} WHERE id = ${parseInt(req.params.id)}`, e=>{
    if (e) {console.log(e)}
    res.sendStatus(200)
  })
})


//still need heroku.
app.listen(3000, ()=>{console.log('Server listening.')})