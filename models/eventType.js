const mongoose = require('mongoose');

const eventTypeSchema = new mongoose.Schema({
	type: {
		type: String,
		required: true,
		minlength: 3,
		maxlength: 255,
	},
});

const EventType = mongoose.model('eventtypes', eventTypeSchema);
exports.EventType = EventType;
