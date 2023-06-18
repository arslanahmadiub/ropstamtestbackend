const mongoose = require("mongoose");
const Joi = require("joi");

const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

const categoryJoiSchema = Joi.object({
  name: Joi.string().min(2).required(),
});

module.exports.CategoryModel = mongoose.model("Category", CategorySchema);
module.exports.categorySchema = categoryJoiSchema;
