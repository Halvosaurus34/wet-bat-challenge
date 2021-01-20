const express = require('express')
const router = express.Router()
const db = require('../config/database')
const Quotes = require('../models/Quotes')

// Get quote list
router.get('/', (req,res) => 
    Quotes.findAll()
        .then(quotes => {
            // console.log(quotes)
            res.send(quotes)
        })
        .catch(err => console.log(err)))


// Add a quote
router.get('/add', (req,res) => {
    const data = {
        id:2,
        full_name: "Hannah Purkiss",
        phone_number: "403-352-3053",
        user_address: "36 Anders St",
        departure_airport: "YYZ",
        destination: "XYZ",
        departure_date: "2021-02-01",
        return_airport: "XYZ",
        return_date: "2021-02-05",
        optional_transport: null
    }

    var { id, full_name, phone_number, user_address, departure_airport, destination, departure_date, return_airport, return_date, optional_transport } = data

    //Insert into table
    Quotes.create({
        id,
        full_name,
        phone_number,
        user_address,
        departure_airport,
        destination,
        departure_date,
        return_airport,
        return_date,
        optional_transport
    })
    .then(quote => res.redirect('/quotes'))
    .catch(err => console.log(err))
})

module.exports = router