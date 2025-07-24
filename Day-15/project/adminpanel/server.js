// server.js or app.js
const express = require("express");
const mongoose = require("mongoose");
const adminRoutes = require("./routes/admin.routes");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/jobportal", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/admin", adminRoutes);

app.listen(3000, () => {
  console.log("Server started at http://localhost:3000");
});
