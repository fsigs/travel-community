const Joi = require('joi');

const createTripSchema = Joi.object({
  name: Joi.string().required(),
  summary: Joi.string().required(),
  details: Joi.string().required(),
  startDate: Joi.date().iso().required(),
  endDate: Joi.date().iso().required(),
  locationFrom: Joi.string().required(),
  locationTo: Joi.string().required(),
  email: Joi.string().email().required(),
  registrations: Joi.number().integer().min(1),
  cost: Joi.number().integer().min(1),
});

const updateTripSchema = Joi.object({
  name: Joi.string().required(),
  summary: Joi.string().required(),
  details: Joi.string().required(),
  startDate: Joi.date().iso().required(),
  endDate: Joi.date().iso().required(),
  locationFrom: Joi.string().required(),
  locationTo: Joi.string().required(),
  email: Joi.string().email().required(),
  registrations: Joi.number().integer().min(1),
  cost: Joi.number().integer().min(1),
});

module.exports = { createTripSchema, updateTripSchema };