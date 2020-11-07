const { EventType } = require('../models/EventType');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// Get all eventTypes
router.get('/', async (req, res) => {
	try {
		const eventTypes = await EventType.find();
		res.send(eventTypes);
	} catch (err) {
		res.status(500).json({
			message: err.message,
		});
	}
});

// Post eventType
router.post('/', async (req, res) => {
	try {
		const eventType = new EventType({
			type: req.body.type,
		});
		await eventType.save();
		res.send(eventType);
	} catch (error) {
		res.send(error);
	}
});
module.exports = router;
