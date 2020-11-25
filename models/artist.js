const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
	name: {
		type: String,
		maxlength: 255,
	},
	type: {
		type: String,
		maxlength: 255,
	},
	description: {
		type: String,
		maxlength: 3000,
	},
	website: {
		type: String,
		maxlength: 250,
	},
	imagesUrl: {
		type: Array,
	},
	links: {
		type: Array,
	},
	events: {
		type: Array,
	},
	picture: {
		type: String,
	},
});

const Artist = mongoose.model('artists', artistSchema);
exports.Artist = Artist;
