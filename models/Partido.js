const mongoose = require('mongoose');

const PartidoSchema = mongoose.Schema({
    liga: { type: String, required: true },
    fechaLiga: { type: Number, required: true },
    fecha: { type: Date, required: true },
    jueces: [{
        juez1: { type: String, required: true },
        juez2: { type: String, required: true },
        juez3: { type: String, required: true }
    }],
    cancha: { type: String, required: true },
    local: { type: Boolean, required: true},
    resultado: { type: String, required: true },
    ganado: { type: Boolean, required: true },
    alargue: { type: Boolean, required: true },
    cantidadAlargues: { type: Number, required: true },
    localStats: [
        [{
            numero: { type: String, required: true },
            jugador: { type: String, required: true },
            minutos: { type: String, required: true },
            puntos: { type: Number, required: true },
            triplesHechos: { type: Number, required: true },
            triplesIntent: { type: Number, required: true },
            triplesPercent: { type: Number, required: true },
            doblesHechos: { type: Number, required: true },
            doblesIntent: { type: Number, required: true },
            doblesPercent: { type: Number, required: true },
            libresHechos: { type: Number, required: true },
            libresIntent: { type: Number, required: true },
            libresPercent: { type: Number, required: true },
            rebotesOff: { type: Number, required: true },
            rebotesDef: { type: Number, required: true },
            rebotesTot: { type: Number, required: true },
            tapas: { type: Number, required: true },
            asistencias: { type: Number, required: true },
            perdidas: { type: Number, required: true },
            robos: { type: Number, required: true },
            fouls: { type: Number, required: true },
            foulsRec: { type: Number, required: true },
            valor: { type: Number, required: true },
            masMenos: { type: Number }
        }],
        [{
            dt: { type: String, required: true }
        }]
    ],
    totalLocalStats: [{
        totalMinutos: { type: Number, required: true },
        totalPuntos: { type: Number, required: true },
        totalTriplesHechos: { type: Number, required: true },
        totalTriplesIntent: { type: Number, required: true },
        totalTriplesPercent: { type: Number, required: true },
        totalDoblesHechos: { type: Number, required: true },
        totalDoblesIntent: { type: Number, required: true },
        totalDoblesPercent: { type: Number, required: true },
        totalLibresHechos: { type: Number, required: true },
        totalLibresIntent: { type: Number, required: true },
        totalLibresPercent: { type: Number, required: true },
        totalRebotesOff: { type: Number, required: true },
        totalRebotesDef: { type: Number, required: true },
        totalRebotesTot: { type: Number, required: true },
        totalTapas: { type: Number, required: true },
        totalAsistencias: { type: Number, required: true },
        totalPerdidas: { type: Number, required: true },
        totalRobos: { type: Number, required: true },
        totalFouls: { type: Number, required: true },
        totalFoulsRec: { type: Number, required: true },
        totalValor: { type: Number, required: true }
    }],
    visitanteStats: [
        [{
            numero: { type: String, required: true },
            jugador: { type: String, required: true },
            minutos: { type: String, required: true },
            puntos: { type: Number, required: true },
            triplesHechos: { type: Number, required: true },
            triplesIntent: { type: Number, required: true },
            triplesPercent: { type: Number, required: true },
            doblesHechos: { type: Number, required: true },
            doblesIntent: { type: Number, required: true },
            doblesPercent: { type: Number, required: true },
            libresHechos: { type: Number, required: true },
            libresIntent: { type: Number, required: true },
            libresPercent: { type: Number, required: true },
            rebotesOff: { type: Number, required: true },
            rebotesDef: { type: Number, required: true },
            rebotesTot: { type: Number, required: true },
            tapas: { type: Number, required: true },
            asistencias: { type: Number, required: true },
            perdidas: { type: Number, required: true },
            robos: { type: Number, required: true },
            fouls: { type: Number, required: true },
            foulsRec: { type: Number, required: true },
            valor: { type: Number, required: true },
            masMenos: { type: Number }
        }],
        [{
            dt: { type: String, required: true }
        }]
    ],
    totalvisitanteStats: [{
        totalMinutos: { type: Number, required: true },
        totalPuntos: { type: Number, required: true },
        totalTriplesHechos: { type: Number, required: true },
        totalTriplesIntent: { type: Number, required: true },
        totalTriplesPercent: { type: Number, required: true },
        totalDoblesHechos: { type: Number, required: true },
        totalDoblesIntent: { type: Number, required: true },
        totalDoblesPercent: { type: Number, required: true },
        totalLibresHechos: { type: Number, required: true },
        totalLibresIntent: { type: Number, required: true },
        totalLibresPercent: { type: Number, required: true },
        totalRebotesOff: { type: Number, required: true },
        totalRebotesDef: { type: Number, required: true },
        totalRebotesTot: { type: Number, required: true },
        totalTapas: { type: Number, required: true },
        totalAsistencias: { type: Number, required: true },
        totalPerdidas: { type: Number, required: true },
        totalRobos: { type: Number, required: true },
        totalFouls: { type: Number, required: true },
        totalFoulsRec: { type: Number, required: true },
        totalValor: { type: Number, required: true }
    }],
    dateAdded: { default: Date.now }
});

module.exports = mongoose.model('Partido', PartidoSchema);