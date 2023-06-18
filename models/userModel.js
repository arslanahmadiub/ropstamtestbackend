const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Joi = require("joi");

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const userJoiSchema = Joi.object({
  name: Joi.string().min(3).required(),
  email: Joi.string().email().lowercase().required(),
});

const userPassValidationSchema = Joi.object({
  email: Joi.string().email().lowercase().required(),
  password: Joi.string().min(8).required(),
});

module.exports.UserModel = mongoose.model("User", UserSchema);
module.exports.userSchema = userJoiSchema;
module.exports.userPasswordValidation = userPassValidationSchema;
