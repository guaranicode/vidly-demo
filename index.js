const mongoose = require('mongoose');
const users = require('./routes/users');
const rentals = require('./routes/rentals')
const genres = require('./routes/genres');
const customers = require('./routes/costumers');
const movies = require('./routes/movies');
const express = require('express');
const app = express()

mongoose.connect('mongodb://localhost/vidly')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(error => console.error('Could not connect to MongoDB...'))

app.use(express.json());
app.use('/api/genres', genres);
app.use('/api/customers', customers);
app.use('/api/movies', movies);
app.use('/api/rentals', rentals);
app.use('/api/users', users);

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${ port }...`));