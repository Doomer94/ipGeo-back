const Sequelize = require('sequelize');

const db = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASS, {
    host: process.env.DATABASE_HOST,
    dialect: 'mysql',
});

const ips = db.define('ips', {
    ip: Sequelize.STRING,
    country: Sequelize.STRING,
    city: Sequelize.STRING,
});

db.sync();


module.exports = {
    ips,
    db
}