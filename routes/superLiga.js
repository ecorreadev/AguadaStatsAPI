const express = require('express');
const router = express.Router();
const Partido = require('../models/Partido');

// Busqueda por super liga
router.get('/:superLiga', async (req, res) => {
    try {
        const partido = await Partido.find({ superLiga: req.params.superLiga });
        res.json(partido);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;