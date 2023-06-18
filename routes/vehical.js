// routes/car.js
const express = require('express');
const VehicalController = require('../controllers/vehicalController');
const router = express.Router();
const authenticate = require("../middleware/authenticate");


router.post('/create-vehical',authenticate, VehicalController.createVehicle);
router.get('/vehicals',authenticate, VehicalController.getVehicles);
router.get('/vehical/:id',authenticate, VehicalController.getVehicle);
router.put('/vehical/:id',authenticate, VehicalController.updateVehicle);
router.delete('/vehical/:id',authenticate, VehicalController.deleteVehicle);

module.exports = router;
