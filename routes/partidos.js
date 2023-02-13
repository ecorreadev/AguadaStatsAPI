const express = require('express');
const router = express.Router();
const Partido = require('../models/Partido');


// GET ALL THE POSTS
router.get('/', async (req, res) => {
    try {
        const partidos = await Partido.find();
        res.json(partidos);
    } catch (err) {
        res.json({ message: err });
    }
});

// SUBMIT A POST
router.post('/', async (req, res) => {
    const partido = new Partido({
        liga: req.body.liga,
        fechaLiga: req.body.fechaLiga,
        fecha: req.body.fecha,
        jueces: req.body.jueces,
        cancha: req.body.cancha,
        local: req.body.local,
        resultado: req.body.resultado,
        ganado: req.body.ganado,
        alargue: req.body.alargue,
        cantidadAlargues: req.body.cantidadAlargues,
        localStats: req.body.localStats,
        totalLocalStats: req.body.totalLocalStats,
        dtLocal: req.body.dtLocal,
        visitanteStats: req.body.visitanteStats,
        totalVisitanteStats: req.body.totalVisitanteStats,
        dtVisitante: req.body.dtVisitante
    });
    try {
        const savedPartido = await partido.save();
        res.json(savedPartido);
    } catch (err) {
        res.json({ message: err });
    }
});

// GETS A SPECIFIC POST
router.get('/:partidoId', async (req, res) => {
    try {
        const partido = await Partido.findById(req.params.partidoId);
        res.json(partido);
    } catch (err) {
        res.json({ message: err });
    }
});

// DELETE POST
router.delete('/:partidoId', async (req, res) => {
    try {
        const removedPartido = await Partido.remove({ _id: req.params.partidoId });
        res.json(removedPartido);
    } catch (err) {
        res.json({ message: err });
    }
});

// UPDATE POST
router.patch('/:partidoId', async (req, res) => {
    try {
        const updatedPartido = await Partido.updateOne({ _id: req.params.partidoId }, { $set: { title: req.body.title } } );
        res.json(updatedPartido);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;