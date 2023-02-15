const mongoose = require('mongoose');

const PartidoSchema = mongoose.Schema({
    liga: { type: String },
    temporadaRegular: { type: Boolean },
    playoffs: { type: Boolean },
    fechaLiga: { type: Number },
    fecha: { type: Date },
    adversario: { type: String },
    jueces: [],
    cancha: { type: String },
    local: { type: Boolean},
    resultado: { type: String },
    ganado: { type: Boolean },
    alargue: { type: Boolean },
    cantidadAlargues: { type: Number },
    alargues: [],
    aguadaStats: [],
    totalAguadaStats: {},
    dtAguada: { type: String },
    adversarioStats: [],
    totalAdversarioStats: {},
    dtAdversario: { type: String },
    dateAdded: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Partido', PartidoSchema);