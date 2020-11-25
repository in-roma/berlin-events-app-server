const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema(
	{
		event: {
			type: String,
			maxlength: 255,
		},
		type: {
			type: String,
			maxlength: 255,
		},
		artist: {
			type: mongoose.Schema.ObjectId,
			ref: 'artists',
		},
		venue: {
			type: mongoose.Schema.ObjectId,
			ref: 'venues',
		},
		description: {
			type: String,
			maxlength: 5000,
		},
		price: {
			type: String,
			maxlength: 255,
		},
		rate: {
			type: Number,
			maxlength: 255,
		},
		tag: {
			type: String,
			maxlength: 255,
		},
		imageUrl: {
			type: String,
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
	this.populate({
		path: 'artist',
		select: 'name type description website imagesUrl links picture',
	});
	next();
});

const Event = mongoose.model('events', eventSchema);
exports.Event = Event;
