const express = require('express');
const router = express.Router();
const Partido = require('../models/Partido');

// Busqueda por torneo
router.get('/:torneo', async (req, res) => {
    try {
        const partido = await Partido.find({ torneo: req.params.torneo });
        res.json(partido);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;