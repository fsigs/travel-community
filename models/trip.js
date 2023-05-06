import mongoose from 'mongoose';

const TripSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  summary: {
    type: String,
    required: true
  },
  details: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  locationFrom: {
    type: String,
    required: true
  },
  locationTo: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  registrations: {
    type: Number,
    required: false,
    get: v => Math.round(v),
    set: v => Math.round(v),
    alias: 'i'
  },
  cost:{
    type: Number,
    required: true,
  }
}, { timestamps: true });

module.exports = mongoose.models.Trip || mongoose.model('Trip', TripSchema)