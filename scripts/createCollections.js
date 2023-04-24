const mongoose = require('mongoose');
const Trip = require('../models/trip');

const mongoDBUrl = 'mongodb://127.0.0.1:27017/';

// Connect to the MongoDB database
mongoose.connect(mongoDBUrl, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true, 
  useCreateIndex: true, }
  ).then(() => {
    console.log(`Connected to MongoDB at ${mongoDBUrl}`);

    const db = mongoose.connection.db;
    const dbName = 'travelCommunity';

    db.listCollections({name: dbName}).next((err, collinfo) => {
      if (!collinfo) {
        db.command({create: dbName}, (err, result) => {
          if (err) {
            console.error(err);
            process.exit(1);
          }
          console.log('Created database travelCommunity');
          createCollections();
        });
      }
    });
  })
  .catch((err) => {
    console.error(`Error connecting to MongoDB at ${mongoDBUrl}: ${err}`);
    process.exit(1);
  });

async function createCollections() {
  try {
    await Trip.init();
    console.log('Trip collection created');
  } catch (error) {
    console.error(error);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB');
  }
}