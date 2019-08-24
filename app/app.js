const express = require('express');
CodeBreaker = require('./code-breaker');

const app = express();

app.get('/setsecret/:secret', (req, res) => {
    const number = req.params.secret;
    CodeBreaker.setSecret(number);
    res.send({
        message: 'ok, let the game begins' 
    });
});

app.get('/guess/:number', (req, res) => {
    number = req.params.number;
    res.send({
        result: CodeBreaker.codeBreaker(number)
    });
});

module.exports = app;