const express = require("express");
const cors = require("cors");
const env = require("dotenv").config();
const mongoose = require("mongoose");
const createError = require("http-errors");
const morgan = require("morgan");
const http = require("http");

//routes imports
const indexRoute = require("./routes/indexRoute");

const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL).then((res) => {
  console.log("Connected to the MongoDB");
});

app.use("/", indexRoute);

//error middleware
app.use(function (req, res, next) {
  next(createError(404));
});
app.use(function (err, req, res, next) {
  res.json({ err });
});

const PORT = process.env.PORT || 7000;
server.listen(PORT, () => {
  console.log(`server is listening on port : ${PORT}!`);
});
