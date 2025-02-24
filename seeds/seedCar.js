const connectDB = require("../rent");

async function seedCars() {
  try {
    const db = await connectDB();
    const rentalCarsCollection = db.collection("cars");

    const cars = [
      {
        name: "Toyota Corolla",
        price_per_day: 50,
        year: 2020,
        color: "Blue",
        steering_type: "Automatic",
        number_of_seats: 5,
      },
      {
        name: "Honda Civic",
        price_per_day: 55,
        year: 2021,
        color: "Red",
        steering_type: "Automatic",
        number_of_seats: 5,
      },
      {
        name: "Ford Mustang",
        price_per_day: 120,
        year: 2019,
        color: "Black",
        steering_type: "Manual",
        number_of_seats: 4,
      },
    ];

    await rentalCarsCollection.deleteMany({});
    console.log("Existing cars deleted.");

    await rentalCarsCollection.insertMany(cars);
    console.log("Seed data inserted successfully!");

    process.exit();
  } catch (error) {
    console.error("Error seeding data:", error);
    process.exit(1);
  }
}

seedCars();
