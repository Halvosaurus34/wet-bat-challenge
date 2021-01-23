const { Sequelize } = require('sequelize');

console.log("JAWSDB CONNECTION........", process.enc.JAWSDB_URL)

if (process.env.JAWSDB_URL) {
  connection = new Sequelize(process.env.JAWSDB_URL)
} else {
  connection = new Sequelize('wetbat_db', 'root', 'KpkhcBk3PL4n', {
    host: 'localhost',
    dialect: 'mysql',
    
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle:10000
    },
  });
}

module.exports = connection;