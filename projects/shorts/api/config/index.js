const {
    jsonFileReader,
} = require('../utils');
require('dotenv').config();
const config = {

    // ...jsonFileReader(['.', 'config', 'index.json'])['development'],

    database : process.env.DB_DATABASE,
    dialect : process.env.DB_CONNECTION,
    host : process.env.DB_HOST,
    password : process.env.DB_PASSWORD,
    username : process.env.DB_USERNAME,

    operatorAliases : false,

    define : {
        timestamp : true,
        underscored : false,
        underscoredAll : false,
    },

};
module.exports = config;