'use strict';
const express = require('express');
const Cors = require("cors");
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');

// Indico que vai ser usado CORS nas rotas 
app.use(Cors())

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*")
    res.header('Access-Control-Allow-Header',
        'Origin, X-Request-With, Content-Type, Accept, Authorization')
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        res.header('Access-Control-Allow-Origin', "*")
        return res.status(200).send({})
    }
    next()
})
app.use(bodyParser.json());

const personRoute = require('./routes/person-route');

// Puxando as rotas
app.use('/person', personRoute);

module.exports = app;