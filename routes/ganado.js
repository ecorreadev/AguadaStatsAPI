const express = require('express');
const router = express.Router();
const Partido = require('../models/Partido');

// Busqueda por ganado
router.get('/:ganado', async (req, res) => {
    try {
        const partido = await Partido.find({ ganado: req.params.ganado });
        res.json(partido);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;