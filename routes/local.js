const express = require('express');
const router = express.Router();
const Partido = require('../models/Partido');

// Busqueda por local
router.get('/:local', async (req, res) => {
    try {
        const partido = await Partido.find({ local: req.params.local });
        res.json(partido);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;