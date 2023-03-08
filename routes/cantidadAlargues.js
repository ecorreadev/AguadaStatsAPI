const express = require('express');
const router = express.Router();
const Partido = require('../models/Partido');

// Busqueda por cantidad alargues
router.get('/:cantidadAlargues', async (req, res) => {
    try {
        const partido = await Partido.find({ cantidadAlargues: req.params.cantidadAlargues });
        res.json(partido);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;