const PORT = process.env.PORT || 8000;
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
const adversarioRoute = require('./routes/adversario');
const torneoRout = require('./routes/torneo');
const ligaRout = require('./routes/liga');
const etapaPlayoffsRout = require('./routes/etapaPlayoffs');
const canchaRout = require('./routes/cancha');
const localRout = require('./routes/local');
const playoffsRout = require('./routes/playoffs');

// Routes
app.use('/partidos', partidosRoute);
app.use('/adversario', adversarioRoute);
app.use('/torneo', torneoRout);
app.use('/liga', ligaRout);
app.use('/etapaPlayoffs', etapaPlayoffsRout);
app.use('/cancha', canchaRout);
app.use('/local', localRout);
app.use('/playoffs', playoffsRout);

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