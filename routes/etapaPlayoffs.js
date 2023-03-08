const express = require('express');
const router = express.Router();
const Partido = require('../models/Partido');

// Busqueda por etapa de playoffs
router.get('/:playoffsEtapa', async (req, res) => {
    try {
        const partido = await Partido.find({ playoffsEtapa: req.params.playoffsEtapa });
        res.json(partido);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;