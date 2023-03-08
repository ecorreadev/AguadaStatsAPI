const express = require('express');
const router = express.Router();
const Partido = require('../models/Partido');

// Busqueda por fecha super liga
router.get('/:fechaSuperLiga', async (req, res) => {
    try {
        const partido = await Partido.find({ fechaLiga: req.params.fechaSuperLiga, superLiga: true });
        res.json(partido);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;