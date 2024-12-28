// server.js
const mongoose = require("mongoose");
const courseRoutes = require("./routes/courseRoutes");
const express = require("express");
const cors = require("cors");

const app = express();
mongoose.connect("mongodb://localhost:27017/courses", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
  app.use("/api/courses", courseRoutes);
app.use(cors());
app.use(express.json());

app.post("/contact", (req, res) => {
  console.log(req.body);
  res.send({ message: "Message received" });
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
