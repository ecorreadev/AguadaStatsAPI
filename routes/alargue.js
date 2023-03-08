const express = require('express');
const router = express.Router();
const Partido = require('../models/Partido');

// Busqueda por alargue
router.get('/:alargue', async (req, res) => {
    try {
        const partido = await Partido.find({ alargue: req.params.alargue });
        res.json(partido);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;