const express = require('express');
const router = express.Router();
const Partido = require('../models/Partido');

// Busqueda por dtAguada
router.get('/:dtAguada', async (req, res) => {
    try {
        const partido = await Partido.find({ dtAguada: req.params.dtAguada });
        res.json(partido);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;