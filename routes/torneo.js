const express = require('express');
const { async } = require('rxjs');
const router = express.Router();
const Partido = require('../models/Partido');

// GET TODOS LOS PARTIDOS
router.get('/', async (req, res) => {
    try {
        const partidos = await Partido.find();
        res.json(partidos);
    } catch (err) {
        res.json({ message: err });
    }
});

// GET UN PARTIDO ESPECIFICO
router.get('/:partidoId', async (req, res) => {
    try {
        const partido = await Partido.findById(req.params.partidoId);
        res.json(partido);
    } catch (err) {
        res.json({ message: err });
    }
});

// SUBMIT UN PARTIDO
router.post('/', async (req, res) => {
    const partido = new Partido({
        torneo: req.body.torneo,
        liga: req.body.liga,
        temporadaRegular: req.body.temporadaRegular,
        playoffs: req.body.playoffs,
        playoffsEtapa: req.body.playoffsEtapa,
        superLiga: req.body.superLiga,
        fechaLiga: req.body.fechaLiga,
        fecha: new Date(req.body.fecha),
        adversario: req.body.adversario,
        jueces: req.body.jueces,
        cancha: req.body.cancha,
        local: req.body.local,
        resultado: req.body.resultado,
        ganado: req.body.ganado,
        alargue: req.body.alargue,
        cantidadAlargues: req.body.cantidadAlargues,
        alargues: req.body.alargues,
        aguadaStats: req.body.aguadaStats,
        totalAguadaStats: req.body.totalAguadaStats,
        dtAguada: req.body.dtAguada,
        adversarioStats: req.body.adversarioStats,
        totalAdversarioStats: req.body.totalAdversarioStats,
        dtAdversario: req.body.dtAdversario
    });
    try {
        const savedPartido = await partido.save();
        res.json(savedPartido);
    } catch (err) {
        res.json({ message: err });
    }
});

// DELETE PARTIDO
router.delete('/:partidoId', async (req, res) => {
    try {
        const removedPartido = await Partido.remove({ _id: req.params.partidoId });
        res.json(removedPartido);
    } catch (err) {
        res.json({ message: err });
    }
});

// UPDATE PARTIDO
router.patch('/:partidoId', async (req, res) => {
    try {
        const updatedPartido = await Partido.updateOne({ _id: req.params.partidoId }, { $set: { title: req.body.title } } );
        res.json(updatedPartido);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;