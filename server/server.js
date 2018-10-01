const express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.status(404).send({
        error: 'Page not found',
        name: 'Todo App v1.0'
    });
});

app.get('/users', (req, res) => {
    res.status(200).send([{
            name: 'Ujwal',
            age: 25
        },
        {
            name: 'Me',
            age: 26
        },
        {
            name: 'Myself',
            age: 27
        },
        {
            name: 'I',
            age: 28
        }
    ]);
});

app.listen(3000);

module.exports.app = app;