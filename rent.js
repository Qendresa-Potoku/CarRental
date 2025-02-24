const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URI || "mongodb://localhost:27017";
const client = new MongoClient(uri);
let dbInstance;

async function connectDB() {
  if (dbInstance) return dbInstance;
  try {
    await client.connect();
    dbInstance = client.db("carRental");
    console.log("Connected to MongoDB");
    return dbInstance;
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw error;
  }
}

module.exports = connectDB;
