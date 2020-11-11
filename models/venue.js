const mongoose = require('mongoose');

const venueSchema = new mongoose.Schema({
	name: {
		type: String,
		minlength: 1,
		maxlength: 255,
	},
	address: {
		type: String,
		minlength: 1,
		maxlength: 255,
	},
	description: {
		type: String,
		minlength: 1,
		maxlength: 3000,
	},
	location: {
		type: Array,
	},
	website: {
		type: String,
		minlength: 1,
		maxlength: 250,
	},
	imagesUrl: {
		type: Array,
	},
});

const Venue = mongoose.model('venues', venueSchema);
exports.Venue = Venue;
