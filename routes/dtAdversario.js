const express = require('express');
const router = express.Router();
const Partido = require('../models/Partido');

// Busqueda por dtAdversario
router.get('/:dtAdversario', async (req, res) => {
    try {
        const partido = await Partido.find({ dtAdversario: req.params.dtAdversario });
        res.json(partido);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;