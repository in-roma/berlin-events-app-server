// Packages
const morgan = require('morgan');
const express = require('express');
const config = require('config');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

// Environment variables

const dotenv = require('dotenv');
dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;

// Modules
const home = require('./routes/home');
const events = require('./routes/events');
const eventTypes = require('./routes/eventtypes');
const venues = require('./routes/venues');
const artists = require('./routes/artists');
const users = require('./routes/users');
app.use(morgan('dev'));
app.use(cors());

// Html
app.use(express.static('public'));

// Main routes
app.use(express.json());
app.use('/', home);
app.use('/api/events', events);
app.use('/api/eventtypes', eventTypes);
app.use('/api/venues', venues);
app.use('/api/artists', artists);
app.use('/api/users', users);

// JSON Parsing
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

// MongoDB
const db = config.get('db');
mongoose
	.connect(process.env.MONGODB_URI || db, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
		useCreateIndex: true,
	})
	.then(() => console.log(`Connected to ${db}...`))
	.catch((error) => {
		console.log(`There was a problem with mongodb:${error.message}`);
	});
mongoose.set('useFindAndModify', false);

// Server
const port = process.env.PORT || config.get('port');
const server = app.listen(port, () =>
	console.log(`Server listening on port ${port}...`)
);

module.exports = server;
