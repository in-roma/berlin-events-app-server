const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// Home
router.get('/', async (req, res) => {
	res.send('server running');
});

module.exports = router;
