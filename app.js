const express = require("express");
const path = require("path");
var cors = require("cors");
require("dotenv/config");
const app = express();
const mongoose = require("mongoose");

//MIDDLEWARES
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/static", express.static("static"));

//IMPORT ROUTES
const galleryRoutes = require("./routes/gallery");
app.use("/gallery", galleryRoutes);

const quizRoutes = require("./routes/quiz");
app.use("/quiz", quizRoutes);

//ROUTES
app.get("/", (req, res) => {
  res.send("welcome to D2D API!!");
});

//Connect to DB
mongoose.connect(
  "mongodb+srv://admin:admin@d2d-test-8dimz.mongodb.net/funfiesta?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("connected to db!");
  }
);

app.listen(5001);
