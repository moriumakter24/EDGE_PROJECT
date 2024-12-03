
const express = require('express');
const router = express.Router();

// Mock endpoint for customers
router.get('/', (req, res) => {
    res.json({ message: 'List of customers' });
});

module.exports = router;
