const express = require('express');
const router = express.Router();
const Partido = require('../models/Partido');

// Busqueda por cancha
router.get('/:cancha', async (req, res) => {
    try {
        const partido = await Partido.find({ cancha: req.params.cancha });
        res.json(partido);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;