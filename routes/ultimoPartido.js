const express = require('express');
const router = express.Router();
const Partido = require('../models/Partido');

// Busqueda por ultimoPartido
router.get('/', async (req, res) => {
    try {
        const partido = await Partido.find().sort({"fecha": -1}).limit(1);
        res.json(partido);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;