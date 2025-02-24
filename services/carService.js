const connectDB = require("../rent");

async function getRentalCars(req, res) {
  try {
    const db = await connectDB();
    const rentalCarsCollection = db.collection("cars");

    const { year, color, steeringType, seats } = req.query;
    const filters = {};

    if (year) filters.year = parseInt(year);
    if (color) filters.color = color;
    if (steeringType) filters.steering_type = steeringType;
    if (seats) filters.number_of_seats = parseInt(seats);

    const rentalCars = await rentalCarsCollection
      .find(filters)
      .sort({ price_per_day: 1 })
      .toArray();

    if (rentalCars.length === 0) {
      return res.status(404).json({ message: "No cars found." });
    }

    res.json(rentalCars);
  } catch (error) {
    console.error("Error fetching rental cars:", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = { getRentalCars };
