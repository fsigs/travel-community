const { MongoClient } = require('mongodb');

async function updateTrips() {
  const uri = 'mongodb://127.0.0.1:27017';
  const client = new MongoClient(uri);

  try {
    await client.connect();
    const database = client.db('travelCommunity');
    const collection = database.collection('trips');

    const trips = await collection.find().toArray();
    for (let trip of trips) {
      if (typeof trip.startDate === 'string' && trip.startDate.match(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/)) {
        trip.startDate = new Date(trip.startDate);
      }
      if (typeof trip.endDate === 'string' && trip.endDate.match(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/)) {
        trip.endDate = new Date(trip.endDate);
      }
      await collection.updateOne({ _id: trip._id }, { $set: { startDate: trip.startDate, endDate: trip.endDate } });
    }
  } finally {
    await client.close();
  }
}

updateTrips();
