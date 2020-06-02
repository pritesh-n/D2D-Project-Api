const express = require("express");
var cors = require("cors");
require("dotenv/config");
const app = express();
const mongoose = require("mongoose");

//MIDDLEWARES
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
  "mongodb://localhost:27017/funfiesta",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("connected to db!");
  }
);

app.listen(5001);
