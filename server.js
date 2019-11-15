const express = require('express')
const mysql = require('mysql2')
const {join} = require('path')
const app = express()


//DATABASE CONNECTION
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


//ROUTES.
app.get('/', (req, res)=>{
  res.render('index')
})


//still need heroku.
app.listen(3000, ()=>{console.log('Server listening.')})