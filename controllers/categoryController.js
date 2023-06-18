const { CategoryModel, categorySchema } = require("../models/categoryModel");
require("dotenv").config();

// GET all categories
const getCategories = async (req, res) => {
  try {
    const categories = await CategoryModel.find({});
    res.json(categories);
  } catch (err) {
    console.log("Error", err);
    res.status(500).send(err);
  }
};

// POST a new category
const postCategory = async (req, res) => {
  try {
    const { value, error } = categorySchema.validate(req.body);

    if (error) {
      return res.status(400).json(error.details[0].message);
    }

    const category = new CategoryModel({
      name: value.name,
    });

    const newCategory = await category.save();
    res.status(201).json(newCategory);
  } catch (err) {
    console.log("Error", err);
    res.status(500).send(err);
  }
};

// PUT update a category
const updateCategory = async (req, res) => {
  try {
    const { value, error } = categorySchema.validate(req.body);

    if (error) {
      return res.status(400).json(error.details[0].message);
    }

    const category = await CategoryModel.findByIdAndUpdate(req.params.id, value, { new: true });

    if (!category) {
      return res.status(404).json({ message: "Category not found." });
    }

    res.json(category);
  } catch (err) {
    console.log("Error", err);
    res.status(500).send(err);
  }
};

// DELETE a category
const deleteCategory = async (req, res) => {
  try {
    const category = await CategoryModel.findByIdAndDelete(req.params.id);

    if (!category) {
      return res.status(404).json({ message: "Category not found." });
    }

    res.json({ message: "Category deleted." });
  } catch (err) {
    console.log("Error", err);
    res.status(500).send(err);
  }
};

module.exports = {
  getCategories,
  postCategory,
  updateCategory,
  deleteCategory,
};
