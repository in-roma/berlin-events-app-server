const { Artist } = require('../models/artist');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// Get all artists
router.get('/', async (req, res) => {
	res.send('server running');
});

module.exports = router;
