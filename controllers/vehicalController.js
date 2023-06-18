const { VehicalModel, vehicalSchema,vehicalUpdateSchema } = require("../models/vehicalModel");

const getVehicles = async (req, res) => {
  try {
    const vehicles = await VehicalModel.find().populate("category");
    return res.json(vehicles);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const getVehicle = async (req, res) => {
  try {
    const vehicle = await VehicalModel.findById(req.params.id).populate(
      "category"
    );
    if (!vehicle)
      return res.status(404).json({ message: "Vehicle not found." });
    return res.json(vehicle);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const createVehicle = async (req, res) => {
  try {
    const { value, error } = vehicalSchema.validate(req.body);
    if (error) return res.status(400).json(error.details[0].message);
    const vehicle = new VehicalModel(value);
    await vehicle.save();
    return res.status(201).json(vehicle);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const updateVehicle = async (req, res) => {
  try {
    const { value, error } = vehicalUpdateSchema.validate(req.body);
    if (error) return res.status(400).json(error.details[0].message);

    const vehicle = await VehicalModel.findByIdAndUpdate(req.params.id, value, {
      new: true,
    });
    if (!vehicle)
      return res.status(404).json({ message: "Vehicle not found." });
    return res.json(vehicle);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

const deleteVehicle = async (req, res) => {
  try {
    const vehicle = await VehicalModel.findByIdAndRemove(req.params.id);
    if (!vehicle)
      return res.status(404).json({ message: "Vehicle not found." });
    return res.json({ message: "Vehicle deleted." });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getVehicles,
  getVehicle,
  createVehicle,
  updateVehicle,
  deleteVehicle,
};
