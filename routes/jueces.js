const express = require('express');
const router = express.Router();
const Partido = require('../models/Partido');

// Busqueda por jueces
router.get('/:jueces', async (req, res) => {
    try {
        const partido = await Partido.find( { jueces: { $in: [req.params.jueces] } } );
        res.json(partido);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;