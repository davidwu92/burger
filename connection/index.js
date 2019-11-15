//connection/index.js for the DATABASE CONNECTION
//Let's combine everything down there and get rid of "db" and mysql as variables.
module.exports = require('mysql2').createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'burgers_db'
})

//~~~~HOW IT LOOKED BEFORE~~~~~~
// const mysql = require('mysql2')

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'password',
//   database: 'burgers_db'
// })

// module.exports = db

