const { EventDate } = require('../models/eventdate');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// Get all eventDates
router.get('/', async (req, res) => {
	try {
		const eventDates = await EventDate.find();
		res.send(eventDates);
	} catch (err) {
		res.status(500).json({
			message: err.message,
		});
	}
});

// Post eventDate
router.post('/', async (req, res) => {
	try {
		const eventDate = new EventDate({
			utc: req.body.utc,
			type: req.body.type,
			event: req.body.event,
		});
		await eventDate.save();
		res.send(eventDate);
	} catch (error) {
		res.send(error);
	}
});

// Update eventDate
router.put('/:id', async (req, res) => {
	try {
		const eventDate = await EventDate.findByIdAndUpdate(
			req.params.id,
			{
				utc: req.body.utc,
				type: req.body.type,
				event: req.body.event,
			},
			{ new: true }
		);
		res.status(201).send(eventDate);
	} catch (error) {
		res.status(404).send(error);
	}
});

// Delete eventDate
router.delete('/:id', async (req, res) => {
	try {
		const eventDate = await EventDate.findByIdAndRemove(req.params.id);
		res.send('eventDate deleted');
	} catch (error) {
		res.send(error);
	}
});

module.exports = router;
