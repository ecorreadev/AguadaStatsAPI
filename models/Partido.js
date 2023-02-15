const mongoose = require('mongoose');

const PartidoSchema = mongoose.Schema({
    liga: { type: String, required: true },
    temporadaRegular: { type: Boolean, required: true },
    playoffs: { type: Boolean, required: true },
    fechaLiga: { type: Number, required: true },
    fecha: { type: Date, required: true },
    adversario: { type: String, required: true },
    jueces: [],
    cancha: { type: String, required: true },
    local: { type: Boolean, required: true },
    resultado: { type: String, required: true },
    ganado: { type: Boolean, required: true },
    alargue: { type: Boolean, required: true },
    cantidadAlargues: { type: Number, required: true },
    alargues: [],
    aguadaStats: [],
    totalAguadaStats: {},
    dtAguada: { type: String, required: true },
    adversarioStats: [],
    totalAdversarioStats: {},
    dtAdversario: { type: String, required: true },
    dateAdded: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Partido', PartidoSchema);