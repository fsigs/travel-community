import Trip from '../models/trip'
import { createTripSchema, updateTripSchema } from './tripValidation';

const listTrips = async (page = 1, filters = {}) => {

  const { name, startDate, endDate, locationFrom, locationTo, cost } = filters;
  const limit = 6 
  const query = {};

  if (name) query.name = { $regex: name, $options: 'i' };
  if (startDate) query.startDate = { $gte: new Date(startDate) };
  if (endDate) query.endDate = { $lte: new Date(endDate) };
  if (locationFrom) query.locationFrom = { $regex: locationFrom, $options: 'i' };
  if (locationTo) query.locationTo = { $regex: locationTo, $options: 'i' };
  if (cost) query.cost = { $lte: cost };

  const skip = (page - 1) * limit;

  const count = await Trip.countDocuments(query);
  
  const trips = await Trip.aggregate([
    { $match: query },
    {
      $lookup: {
        from: 'subscriptions',
        localField: '_id',
        foreignField: 'trip',
        as: 'subscriptions'
      }
    },
    {
      $addFields: {
        numSubscribers: { $size: '$subscriptions' }
      }
    },
    { $sort: { createdAt: -1 } },
    { $skip: skip },
    { $limit: limit }
  ]);

  return {
    data: trips,
    page: page,
    limit: limit,
    totalCount: count
  };
};

const getTripById = async (id) => {
  return await Trip.findById(id);
};

const searchTrips = async (q, startDate, endDate) => {
  return null;
}

const createTrip = async (payload) => {
  const { error } = createTripSchema.validate(payload);
  if (error) {
    const errorMessage = error.details[0].message;
    return {'error': errorMessage};
  }
  const trip = new Trip(payload);
  return await trip.save();
};

const updateTrip = async (id, payload) => {
  const { error } = updateTripSchema.validate(payload);
  if (error) {
    const errorMessage = error.details[0].message;
    return {'error': errorMessage};
  }
  return await Trip.findByIdAndUpdate(id, payload, { new: true });
};

const deleteTrip = async (id) => {
  return await Trip.findByIdAndRemove(id);
};

module.exports = { listTrips, getTripById, searchTrips, createTrip, updateTrip, deleteTrip };