const mongoose = require('mongoose');

const eventDateSchema = new mongoose.Schema({
	utc: {
		type: String,
	},
	type: {
		type: mongoose.Schema.ObjectId,
		ref: 'EventType',
	},
	event: {
		type: mongoose.Schema.ObjectId,
		ref: 'Event',
	},
	createdAt: {
		type: Date,
		default: Date.now,
	},
});

const EventDate = mongoose.model('eventdates', eventDateSchema);
exports.EventDate = EventDate;
