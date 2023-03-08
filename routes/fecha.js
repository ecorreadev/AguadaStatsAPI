const express = require('express');
const router = express.Router();
const Partido = require('../models/Partido');

// Busqueda por fecha
router.get('/:fecha', async (req, res) => {
    try {
        const partido = await Partido.find({ fecha: req.params.fecha });
        res.json(partido);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;