const path = require('path');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const testRoutes = require('./routes/test');

const app = express();

app.use(cors())
    // app.use(bodyParser.urlencoded()); // x-wwww-urlencoded <form> - only for forms
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Methods',
        'GET, POST, PUT, PATCH, DELETE'
    );
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// add your routes here
app.use(testRoutes);


mongoose
    .connect(
        'mongodb+srv://ujwal:ujwal@cluster0-hj8l4.mongodb.net/mydb?retryWrites=true&w=majority', { useUnifiedTopology: true, useNewUrlParser: true }
    )
    .then(result => {
        app.listen(3001);
    })
    .catch(err => {
        console.log(err);
    });