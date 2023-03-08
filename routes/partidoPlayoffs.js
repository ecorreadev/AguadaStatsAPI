const express = require('express');
const router = express.Router();
const Partido = require('../models/Partido');

// Busqueda por fecha partido playoffs
router.get('/:partidoPlayoffs', async (req, res) => {
    try {
        const partido = await Partido.find({ fechaLiga: req.params.partidoPlayoffs, playoffs: true });
        res.json(partido);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;