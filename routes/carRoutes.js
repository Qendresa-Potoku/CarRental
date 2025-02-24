const express = require("express");
const { getRentalCars } = require("../services/carService");
const router = express.Router();

router.get("/rental-cars", getRentalCars);

module.exports = router;
