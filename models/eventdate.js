const mongoose = require('mongoose');

const eventDateSchema = new mongoose.Schema(
	{
		utc: {
			type: String,
		},
		event: {
			type: mongoose.Schema.ObjectId,
			ref: 'events',
		},
		createdAt: {
			type: Date,
			default: Date.now,
		},
	},
	{
		toJSON: { virtuals: true },
		toObject: { virtuals: true },
	}
);

eventDateSchema.pre(/^find/, function (next) {
	this.populate({
		path: 'event',
		select:
			'location event artist date price description type imageUrl address tag reviews extraData youtubeLink soundCloudLink',
	});
	next();
});

const EventDate = mongoose.model('eventdates', eventDateSchema);
exports.EventDate = EventDate;
