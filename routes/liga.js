const express = require('express');
const router = express.Router();
const Partido = require('../models/Partido');

// Busqueda por liga
router.get('/:liga', async (req, res) => {
    try {
        const partido = await Partido.find({ liga: req.params.liga });
        res.json(partido);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;