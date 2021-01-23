const express = require('express')
const bodyparser = require('body-parser')
const path = require('path')

// Database
const db = require('./config/database')

// Test db
db.authenticate()
    .then(()=> console.log('Database connected...'))
    .catch(err=> console.log(err))

const app = express();
app.use(express.static("../client/build"));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/client/build/index.html');
});
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
//Quotes routes
app.use('/quotes', require('./routes/quotes'))

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server started on port ${PORT}`))