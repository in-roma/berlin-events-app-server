const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minlength: 3,
		maxlength: 255,
	},
	email: {
		type: String,
		required: true,
		minlength: 3,
		maxlength: 255,
	},
	password: {
		type: String,
		required: true,
		minlength: 3,
		maxlength: 255,
	},
	agenda: {
		type: Array,
		required: false,
	},
	friends: {
		type: Array,
		required: false,
	},
	reviews: {
		type: Array,
		required: false,
	},
	archive: {
		type: Array,
		required: false,
	},
});

const User = mongoose.model('users', userSchema);
exports.User = User;
