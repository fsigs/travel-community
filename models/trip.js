import mongoose from 'mongoose';

const tripSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  summary: {
    type: String,
    required: false
  },
  details: {
    type: String,
    required: false
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  origin: {
    type: String,
    required: false
  },
  startingPoint: {
    type: String,
    required: false
  },
  destination: {
    type: String,
    required: false
  },
  email: {
    type: String,
    required: false
  },
  address: {
    type: String,
    required: false
  },
  registrations: {
    type: Number,
    required: false,
    get: v => Math.round(v),
    set: v => Math.round(v),
    alias: 'i'
  }
}, { timestamps: true });

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;