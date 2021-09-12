require('dotenv').config();
module.exports = {
    dialect : process.env.DB_CONNECTION,
    database : process.env.DB_DATABASE,
    host : process.env.DB_HOST,
    password : process.env.DB_PASSWORD,
    port : process.env.DB_PORT,
    username : process.env.DB_USERNAME,
    operatorAliases : false,
    define : {
        timestamp : true,
        underscored : false,
        underscoredAll : false,
    },
};