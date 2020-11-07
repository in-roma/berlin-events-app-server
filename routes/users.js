const { User } = require('../models/user');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

// Get all users
router.get('/', async (req, res) => {
	try {
		const users = await User.find();
		res.send(users);
	} catch (err) {
		res.status(500).json({
			message: err.message,
		});
	}
});

// Post user
router.post('/', async (req, res) => {
	try {
		const user = new User({
			name: req.body.name,
			email: req.body.email,
			password: req.body.password,
			friends: req.body.friends,
			agenda: req.body.agenda,
			reviews: req.body.reviews,
			archive: req.body.archive,
		});
		await user.save();
		res.send(user);
	} catch (error) {
		res.send(error);
	}
});
module.exports = router;
