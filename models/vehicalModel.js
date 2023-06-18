const mongoose = require("mongoose");
const Joi = require("joi");

const Schema = mongoose.Schema;

const VehicalSchema = new Schema({
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  make: {
    type: String,
    required: true,
  },
  registrationNumber: {
    type: String,
    required: true,
    unique: true
  },
});

const vehicalJoiSchema = Joi.object({
  category: Joi.string().required(),
  color: Joi.string().min(2).required(),
  model: Joi.string().min(2).required(),
  make: Joi.string().min(2).required(),
  registrationNumber: Joi.string().min(2).required(),
});


const vehicalJoiUpdateSchema = Joi.object({
  category: Joi.string(),
  color: Joi.string().min(2),
  model: Joi.string().min(2),
  make: Joi.string().min(2),
  registrationNumber: Joi.string().min(2),
});


module.exports.VehicalModel = mongoose.model("Car", VehicalSchema);
module.exports.vehicalSchema = vehicalJoiSchema;
module.exports.vehicalUpdateSchema = vehicalJoiUpdateSchema;
