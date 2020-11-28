const { Event } = require('../models/event');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// Get all events
router.get('/', async (req, res) => {
	try {
		const events = await Event.find();
		res.send(events);
	} catch (err) {
		res.status(500).json({
			message: err.message,
		});
	}
});

// Post event
router.post('/', async (req, res) => {
	try {
		const event = new Event({
			event: req.body.event,
			type: req.body.type,
			artist: req.body.artist,
			venue: req.body.venue,
			description: req.body.description,
			price: req.body.price,
			rate: req.body.rate,
			tag: req.body.tag,
			imageUrl: req.body.imageUrl,
			reviews: req.body.reviews,
			extraData: req.body.extraData,
			youtubeLink: req.body.youtubeLink,
			soundCloudLink: req.body.soundCloudLink,
		});
		await event.save();
		res.send(event);
	} catch (error) {
		res.send(error);
	}
});

// Update event

router.put('/:id', async (req, res) => {
	try {
		const event = await Event.findByIdAndUpdate(
			req.params.id,
			{
				event: req.body.event,
				type: req.body.type,
				artist: req.body.artist,
				venue: req.body.venue,
				description: req.body.description,
				price: req.body.price,
				rate: req.body.rate,
				tag: req.body.tag,
				imageUrl: req.body.imageUrl,
				reviews: req.body.reviews,
				extraData: req.body.extraData,
				youtubeLink: req.body.youtubeLink,
				soundCloudLink: req.body.soundCloudLink,
			},
			{ new: true }
		);
		res.status(201).send(event);
	} catch (error) {
		res.status(404).send(error);
	}
});

// Delete event

router.delete('/:id', async (req, res) => {
	try {
		const event = await Event.findByIdAndRemove(req.params.id);
		res.send('event deleted');
	} catch (error) {
		res.send(error);
	}
});

module.exports = router;
