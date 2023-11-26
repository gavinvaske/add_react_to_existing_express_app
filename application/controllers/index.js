const express = require('express');
const router = express.Router();

router.get('/', (request, response) => {
    response.send('Hello Mars!');
});

router.get('/home', (request, response) => {
    response.render('index');
});

module.exports = router;