const mongoose = require('mongoose');
const Trip = require('../models/trip');

mongoose.connect('mongodb://127.0.0.1:27017/travelCommunity', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Error connecting to MongoDB', err));

const tripsData = require('./trips.json');
const trips = {};

Promise.all(tripsData.map(trip => Trip.create(trip)))
  .then(createdTrips => {
    createdTrips.forEach(trip => {
      trips[trip.name] = trip._id;
    });
  })
  .then(createdTrips => {
    console.log(`Imported ${createdTrips.length} quotes`);
    mongoose.connection.close();
  })
  .catch(err => console.error('Error importing data', err));
