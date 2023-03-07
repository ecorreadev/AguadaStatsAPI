const express = require('express');
const router = express.Router();
const Partido = require('../models/Partido');

// Busqueda por adversario
router.get('/:adversario', async (req, res) => {
    try {
        const partido = await Partido.find({ adversario: req.params.adversario });
        res.json(partido);
    } catch (err) {
        res.json({ message: err });
    }
});



module.exports = router;