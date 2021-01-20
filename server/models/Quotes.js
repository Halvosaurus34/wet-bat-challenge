const Sequelize = require('sequelize')
const db = require('../config/database')

const Quotes = db.define('quotes', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    full_name: {
        type: Sequelize.STRING
    },
    phone_number: {
        type: Sequelize.STRING
    },
    user_address: {
        type: Sequelize.STRING
    },
    departure_airport: {
        type: Sequelize.STRING
    },
    destination: {
        type: Sequelize.STRING
    },
    departure_date: {
        type: Sequelize.DATE
    },
    return_airport: {
        type: Sequelize.STRING
    },
    return_date: {
        type: Sequelize.DATE
    },
    optional_transport: {
        type: Sequelize.STRING
    }
})

module.exports = Quotes