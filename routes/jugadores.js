const express = require('express');
const router = express.Router();
const Partido = require('../models/Partido');

// Busqueda por jugadores
router.get('/:jugadores', async (req, res) => {
    try {
        const partido = await Partido.find( {"aguadaStats.jugador": req.params.jugadores}, {_id: 0, 'aguadaStats.$': 1} )
        res.json(partido);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;