const { Artist } = require('../models/artist');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// Get all artists
router.get('/', async (req, res) => {
	try {
		const artists = await Artist.find();
		res.send(artists);
	} catch (err) {
		res.status(500).json({
			message: err.message,
		});
	}
});

// Post artist
router.post('/', async (req, res) => {
	try {
		const artist = new Artist({
			name: req.body.name,
			description: req.body.description,
			website: req.body.website,
			imagesUrl: req.body.imagesUrl,
			links: req.body.links,
			events: req.body.events,
			picture: req.body.picture,
		});
		await artist.save();
		res.send(artist);
	} catch (error) {
		res.send(error);
	}
});

// Update artist
router.put('/:id', async (req, res) => {
	try {
		const artist = await Artist.findByIdAndUpdate(
			req.params.id,
			{
				name: req.body.name,
				description: req.body.description,
				website: req.body.website,
				imagesUrl: req.body.imagesUrl,
				links: req.body.links,
				events: req.body.events,
				picture: req.body.picture,
			},
			{ new: true }
		);
		res.status(201).send(artist);
	} catch (error) {
		res.status(404).send(error);
	}
});

// Delete artist

router.delete('/:id', async (req, res) => {
	try {
		const venue = await Artist.findByIdAndRemove(req.params.id);
		res.send('artist deleted');
	} catch (error) {
		res.send(error);
	}
});

module.exports = router;
