const express = require('express');
const activities = require('./Routes/activities');
const mongoose = require('mongoose');
require('dotenv/config')
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json())
app.use('/activities', activities);

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true }, () =>{
    console.log('Connected to DB!')
});

app.get('/', (req, res) => {
    res.json({ 'Result': 'Welcome to "What am I going to do today?" API.' });
});

app.listen(3000, () => {
    console.log("'What am I going to do today?' API is running...");
});