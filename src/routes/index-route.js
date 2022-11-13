'use-strict';

const express = require('express');
const router = express.Router();
const http = require('http');

router.get('/', (req, res, next) => {
    res.status(201).send('API PERSON CRUD - Porta 3000');
});


module.exports = router;