const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema(
	{
		event: {
			type: String,
			minlength: 1,
			maxlength: 255,
		},
		type: {
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
		description: {
			type: String,
			minlength: 1,
			maxlength: 5000,
		},
		price: {
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
		reviews: {
			type: Array,
		},
	},
	{
		toJSON: { virtuals: true },
		toObject: { virtuals: true },
	}
);

eventSchema.pre(/^find/, function (next) {
	this.populate({
		path: 'venue',
		select: 'name address description location website imagesUrl',
	});
	next();
});

const Event = mongoose.model('events', eventSchema);
exports.Event = Event;
