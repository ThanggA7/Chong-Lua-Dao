const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const reportRoutes = require("./routes/reportRoutes");
const app = express();
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => console.log("Error connecting to MongoDB:", error));

app.use(express.json());

app.use("/api", reportRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
