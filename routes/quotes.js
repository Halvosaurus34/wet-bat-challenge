const express = require('express')
const router = express.Router()
const db = require('../config/database')
const Quotes = require('../models/Quotes')

// Get quote list
router.get('/', (req,res) => 
    Quotes.findAll()
        .then(quotes => {
            console.log('fetching quotes...')
            res.send(quotes)
        })
        .catch(err => console.log(err)))


// Add a quote
router.post('/add', (req,res) => {
    console.log('add response...', req.body)
    // Insert into table
    Quotes.create({
        full_name: req.body.full_name,
        phone_number: req.body.phone_number,
        user_address: req.body.user_address,
        departure_airport: req.body.departure_airport,
        destination: req.body.destination,
        departure_date: "2021-01-02",
        return_date: "2021-01-04",
        optional_transport: req.body.optional_transport, 
        price: req.body.price,
        people: req.body.people
    })
    .then(quote => res.redirect('/quotes'))
    .catch(err => console.log(err))
})

module.exports = router