const express = require('express');
const activities = require('./Routes/activities');
const mongoose = require('mongoose');
require('dotenv').config({ path: 'ENV_FILENAME' });
const app = express();
const bodyParser = require('body-parser');
const Constants = require("./Constants");
const random = require('./Routes/randomactivitiy');

app.use(bodyParser.json());
app.use('/activities', activities);
app.use('/random', random);

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true }, () =>{
    console.log(Constants.DB_CONNECTION)
});

app.get('/', (req, res) => {
    res.json({ 'Result': Constants.WELCOME_MESSAGE });
});

app.listen(process.env.PORT || 3000, () => {
    console.log(Constants.API_RUNNING_MESSAGE);
});