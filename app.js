const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');


// Middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Import routes
const partidosRoute = require('./routes/partidos');

// Routes
app.use('/partidos', partidosRoute);

app.get('/', (req, res) => {
    res.send('Welcome');
});

mongoose.set('strictQuery', false);
mongoose.connect(process.env.DB_CONNECTION, () => {
    console.log('Connected to DB');
});

app.listen(3000);



// PARA EL FRONTEND
// fetch('http://localhost:3000/partidos').then(result => {
//     return result.json();
// })
// .then(data => {
//     console.log(data);
// })