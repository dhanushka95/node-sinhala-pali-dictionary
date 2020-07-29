const Sequelize = require('sequelize');
const sequelize = new Sequelize('mobile_web_project', 'root', '', {
    host: "localhost",
    dialect: "mysql",
    logging: false,
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
    define: {
        "timestamps": true
    }
});

module.exports = sequelize;
