const { Venue } = require('../models/venue');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// Get all venues
router.get('/', async (req, res) => {
	try {
		const venues = await Venue.find();
		res.send(venues);
	} catch (err) {
		res.status(500).json({
			message: err.message,
		});
	}
});

// Post venue
router.post('/', async (req, res) => {
	try {
		const venue = new Venue({
			name: req.body.name,
			address: req.body.address,
			location: req.body.location,
			description: req.body.description,
			website: req.body.website,
			imagesUrl: req.body.imagesUrl,
		});
		await venue.save();
		res.send(venue);
	} catch (error) {
		res.send(error);
	}
});

// Update venue
router.put('/:id', async (req, res) => {
	try {
		const venue = await Venue.findByIdAndUpdate(
			req.params.id,
			{
				name: req.body.name,
				address: req.body.address,
				location: req.body.location,
				description: req.body.description,
				website: req.body.website,
				imagesUrl: req.body.imagesUrl,
			},
			{ new: true }
		);
		res.status(201).send(venue);
	} catch (error) {
		res.status(404).send(error);
	}
});

// Delete venue

router.delete('/:id', async (req, res) => {
	try {
		const venue = await Venue.findByIdAndRemove(req.params.id);
		res.send('venue deleted');
	} catch (error) {
		res.send(error);
	}
});

module.exports = router;
