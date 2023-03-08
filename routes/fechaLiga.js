const express = require('express');
const router = express.Router();
const Partido = require('../models/Partido');

// Busqueda por fecha liga
router.get('/:fechaLiga', async (req, res) => {
    try {
        const partido = await Partido.find({ fechaLiga: req.params.fechaLiga, temporadaRegular: true });
        res.json(partido);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;