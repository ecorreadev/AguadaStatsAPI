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
const temporadaRegularRout = require('./routes/temporadaRegular');
const superLigaRout = require('./routes/superLiga');
const ganadoRout = require('./routes/ganado');
const fechaLigaRout = require('./routes/fechaLiga');
const fechaSuperLigaRout = require('./routes/fechaSuperLiga');
const partidoPlayoffsRout = require('./routes/partidoPlayoffs');
const alargueRout = require('./routes/alargue');
const cantidadAlarguesRout = require('./routes/cantidadAlargues');
const juecesRout = require('./routes/jueces');
const jugadoresRout = require('./routes/jugadores');
const fechaRout = require('./routes/fecha');
const dtAguadaRout = require('./routes/dtAguada');
const dtAdversarioRout = require('./routes/dtAdversario');
const ultimoPartidoRout = require('./routes/ultimoPartido');

// Routes
app.use('/partidos', partidosRoute);
app.use('/adversario', adversarioRoute);
app.use('/torneo', torneoRout);
app.use('/liga', ligaRout);
app.use('/etapaPlayoffs', etapaPlayoffsRout);
app.use('/cancha', canchaRout);
app.use('/local', localRout);
app.use('/playoffs', playoffsRout);
app.use('/temporadaRegular', temporadaRegularRout);
app.use('/superLiga', superLigaRout);
app.use('/ganado', ganadoRout);
app.use('/fechaLiga', fechaLigaRout);
app.use('/fechaSuperLiga', fechaSuperLigaRout);
app.use('/partidoPlayoffs', partidoPlayoffsRout);
app.use('/alargue', alargueRout);
app.use('/cantidadAlargues', cantidadAlarguesRout);
app.use('/jueces', juecesRout);
app.use('/jugadores', jugadoresRout);
app.use('/fecha', fechaRout);
app.use('/dtAguada', dtAguadaRout);
app.use('/dtAdversario', dtAdversarioRout);
app.use('/ultimoPartido', ultimoPartidoRout);

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