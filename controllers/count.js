const { CategoryModel } = require("../models/categoryModel");
const { VehicalModel } = require("../models/vehicalModel");

const getCounts = async (req, res) => {
  try {
    const categories = await CategoryModel.find({}).count();
    const vehicals = await VehicalModel.find({}).count();
    res.json({
      categoriesCount: categories,
      vehicalsCount: vehicals,
    });
  } catch (err) {
    console.log("Error", err);
    res.status(500).send(err);
  }
};

module.exports = getCounts;
