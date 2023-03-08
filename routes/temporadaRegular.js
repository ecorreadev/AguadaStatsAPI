const express = require('express');
const router = express.Router();
const Partido = require('../models/Partido');

// Busqueda por temporada regular
router.get('/:temporadaRegular', async (req, res) => {
    try {
        const partido = await Partido.find({ temporadaRegular: req.params.temporadaRegular });
        res.json(partido);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;