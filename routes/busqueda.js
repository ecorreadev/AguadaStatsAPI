const express = require('express');
const router = express.Router();
const Partido = require('../models/Partido');

// Busqueda de partidos
router.get('/', async (req, res) => {
    const local = req.query.local;
    const ganado = req.query.ganado;

    try {
        const partido = await Partido.find({ local: local, ganado: ganado });
        res.json(partido);
    } catch (err) {
        res.json({ message: err });
    }
});

module.exports = router;


// http://localhost:8000/api/likes/user?postId=xyz&userId=123
// exports.sampleFunction = async (req, res) => {
//     const postId = req.query.postId
//     const userId = req.query.userId

//     // write your code here
// }

// FRONTEND
// const docs = await fetch(`/api/likes/user?postId=${postId}&userId=${userId}`, {
//     method: 'GET',
//         headers: {
//             Accept: 'application/json',
//             'Content-Type': 'application/json',
//         }
// })
