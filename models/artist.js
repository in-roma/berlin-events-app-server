const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
	name: {
		type: String,
		minlength: 1,
		maxlength: 255,
	},
	description: {
		type: String,
		minlength: 1,
		maxlength: 3000,
	},
	website: {
		type: String,
		minlength: 1,
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
});

const Artist = mongoose.model('artists', artistSchema);
exports.Artist = Artist;
