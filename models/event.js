const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
	event: {
		type: String,
		minlength: 1,
		maxlength: 255,
	},
	artist: {
		type: String,
		minlength: 1,
		maxlength: 255,
	},
	venue: {
		type: mongoose.Schema.ObjectId,
		ref: 'venues',
	},
	date: {
		type: String,
		minlength: 1,
		maxlength: 255,
	},
	time: {
		type: String,
		minlength: 1,
		maxlength: 255,
	},
	address: {
		type: String,
		minlength: 1,
		maxlength: 255,
	},
	city: {
		type: String,
		minlength: 1,
		maxlength: 255,
	},
	postalcode: {
		type: String,
		minlength: 1,
		maxlength: 255,
	},
	price: {
		type: String,
		minlength: 1,
		maxlength: 255,
	},
	description: {
		type: String,
		minlength: 1,
		maxlength: 5000,
	},
	type: {
		type: String,
		minlength: 1,
		maxlength: 255,
	},
	rate: {
		type: Number,
		minlength: 1,
		maxlength: 255,
	},
	tag: {
		type: String,
		minlength: 1,
		maxlength: 255,
	},
	imageUrl: {
		type: String,
		minlength: 1,
		maxlength: 2000,
	},
	location: {
		type: Array,
	},
	utc: {
		type: String,
	},
	eventdates: {
		type: mongoose.Schema.ObjectId,
		ref: 'eventdates',
	},
});

const Event = mongoose.model('events', eventSchema);
exports.Event = Event;
