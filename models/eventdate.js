const mongoose = require('mongoose');

const eventDateSchema = new mongoose.Schema({
	utc: {
		type: String,
	},
	type: {
		type: mongoose.Schema.ObjectId,
		ref: 'eventtypes',
	},
	event: {
		type: mongoose.Schema.ObjectId,
		ref: 'events',
	},
	location: {
		type: Array,
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

const EventDate = mongoose.model('eventdates', eventDateSchema);
exports.EventDate = EventDate;
