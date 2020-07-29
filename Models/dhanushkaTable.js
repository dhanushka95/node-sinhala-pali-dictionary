const Sequelize = require('sequelize');
const db = require('../config/database');

const DhanushkaTable = db.define(
    'dhanushkatable',
    {
        field1: {
            type: Sequelize.STRING,
            AllowNull: false
        },
        field2: {
            type: Sequelize.STRING,
            AllowNull: false
        },
        field3: {
            type: Sequelize.STRING,
            AllowNull: false
        },
        field4: {
            type: Sequelize.STRING,
            AllowNull: false
        },
        field5: {
            type: Sequelize.STRING,
            AllowNull: false
        },
    },
    {
        tableName: 'dhanushkatable',
        timestamps:false
    }
);

module.exports = DhanushkaTable;
