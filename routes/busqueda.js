const express = require('express');
const router = express.Router();
const Partido = require('../models/Partido');

// Busqueda de partidos
router.get('/', async (req, res) => {
    let params = [];

    const torneo = req.query.torneo;
    const liga = req.query.liga;
    const temporadaRegular = req.query.temporadaRegular;
    const playoffs = req.query.playoffs;
    const playoffsEtapa = req.query.playoffsEtapa;
    const superLiga = req.query.superLiga;
    const fechaLiga = req.query.fechaLiga;
    const fecha = req.query.fecha;
    const cancha = req.query.cancha;
    const local = req.query.local;
    const jueces = req.query.jueces;
    const adversario = req.query.adversario;
    const ganado = req.query.ganado;
    const alargue = req.query.alargue;
    const cantidadAlargues = req.query.cantidadAlargues;
    const dtAguada = req.query.dtAguada;
    const dtAdversario = req.query.dtAdversario;

    if (typeof torneo !== 'undefined') {
        params.push({ torneo: torneo });
    }
    if (typeof liga !== 'undefined') {
        params.push({ liga: liga });
    }
    if (typeof temporadaRegular !== 'undefined') {
        params.push({ temporadaRegular: temporadaRegular });
    }
    if (typeof playoffs !== 'undefined') {
        params.push({ playoffs: playoffs });
    }
    if (typeof playoffsEtapa !== 'undefined') {
        params.push({ playoffsEtapa: playoffsEtapa });
    }
    if (typeof superLiga !== 'undefined') {
        params.push({ superLiga: superLiga });
    }
    if (typeof fechaLiga !== 'undefined') {
        params.push({ fechaLiga: fechaLiga });
    }
    if (typeof fecha !== 'undefined') {
        params.push({ fecha: fecha });
    }
    if (typeof cancha !== 'undefined') {
        params.push({ cancha: cancha });
    }
    if (typeof local !== 'undefined') {
        params.push({ local: local });
    }
    if (typeof jueces !== 'undefined') {
        params.push({ jueces: { $in: [jueces] } });
    }
    if (typeof adversario !== 'undefined') {
        params.push({ adversario: adversario });
    }
    if (typeof ganado !== 'undefined') {
        params.push({ ganado: ganado });
    }
    if (typeof alargue !== 'undefined') {
        params.push({ alargue: alargue });
    }
    if (typeof cantidadAlargues !== 'undefined') {
        params.push({ cantidadAlargues: cantidadAlargues });
    }
    if (typeof dtAguada !== 'undefined') {
        params.push({ dtAguada: dtAguada });
    }
    if (typeof dtAdversario !== 'undefined') {
        params.push({ dtAdversario: dtAdversario });
    }

    let query = { $and: params };

    try {
        const partido = await Partido.find(query);
        res.json(partido);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;


// http://localhost:8000/api/likes/user?postId=xyz&userId=123
// exports.sampleFunction = async (req, res) => {
//     const postId = req.query.postId
//     const userId = req.query.userId

//     // write your code here
// }

// FRONTEND
// const docs = await fetch(`/api/likes/user?postId=${postId}&userId=${userId}`, {
//     method: 'GET',
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//         }
// })
