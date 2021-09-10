const cors = require('cors');
const express = require('express');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : false }));
app.use(require('../routes'));

const PORT = require('../config')['port'] || 3000;

require('http').createServer(app).listen(PORT, () => {
    console.log({
        message : 'Server Running',
        port : `${ PORT }`,
    });
});

