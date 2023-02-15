const mongoose = require('mongoose');

const PartidoSchema = mongoose.Schema({
    liga: { type: String },
    fechaLiga: { type: Number },
    fecha: { type: Date },
    jueces: [],
    cancha: { type: String },
    local: { type: Boolean},
    resultado: { type: String },
    ganado: { type: Boolean },
    alargue: { type: Boolean },
    cantidadAlargues: { type: Number },
    aguadaStats: [],
    totalAguadaStats: {},
    dtAguada: { type: String },
    adversarioStats: [],
    totalAdversarioStats: {},
    dtAdversario: { type: String },
    dateAdded: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Partido', PartidoSchema);