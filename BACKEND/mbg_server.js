require("dotenv").config();
const port = parseInt(process.env.PORT) || 8080;
const API = require("./routes/revRte")
const express = require("express");
const app = express();
const { connect } = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
// const { msgModel } = require("./models/models");

//Middle wares
app.use(
  cors({
    origin: "http://localhost/3000",
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/hello", (req, res) => {
  res.end("Welcome to my website");
});
app.use('/api', API);
// Connect to the database then listen for requests on PORT
connect(process.env.MONGODB_URI)
  .then(() =>
    app.listen(port, () => console.log(`Listening for request on port ${port} \nopen app at http://localhost:${port}/hello`))
  )
  .catch((err) => console.error(`error listening on port ${port}`, err));