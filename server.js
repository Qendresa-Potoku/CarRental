require("dotenv").config();
const express = require("express");
const connectDB = require("./rent");
const authRoutes = require("./routes/authRoutes");
const carRoutes = require("./routes/carRoutes");
const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/cars", carRoutes);

const PORT = process.env.PORT || 5000;
connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log("DB Connection Error:", err));
