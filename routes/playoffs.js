const express = require('express');
const router = express.Router();
const Partido = require('../models/Partido');

// Busqueda por playoffs
router.get('/:playoffs', async (req, res) => {
    try {
        const partido = await Partido.find({ playoffs: req.params.playoffs });
        res.json(partido);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;