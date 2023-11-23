const express = require('express');
const db = require('../database'); // Adjust the path as needed
const router = express.Router();

router.get('/flights', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM Flights');
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server error');
    }
});

module.exports = router;
