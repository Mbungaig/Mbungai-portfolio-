require("dotenv").config();
const port = parseInt(process.env.PORT) || 8080;
const API = require("./routes/revRte");
const express = require("express");
const app = express();
const { connect } = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const { reviewModel, testiModel } = require("./models/revMod");

//Middle wares
app.use(
  cors({
    origin: "*",
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/hello", (req, res) => {
  const data = {
    name: req.body.name,
    email: req.body.email,
    message: req.body.review,
  };

  let dataModel = new reviewModel(data);
  dataModel
    .save()
    .then(() => {
      console.log("Saved!");
      res.send("Added");
    })
    .catch((err) => console.log(err));
});

//read reviews in the database 
app.get("/testi", (req, res) => {
  testiModel
  .find()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
});
//create reviews in the database 
app.post("/testi", (req, res) => {
  const data = req.body;
  const newTesti = new testiModel(data);
  newTesti
    .save()
    .then(() => {
      console.log("saved");
      res.end();
    })
    .catch((err) => console.log(err));
});
app.use("/api", API);
// Connect to the database then listen for requests on PORT
connect(process.env.MONGODB_URI)
  .then(() =>
    app.listen(port, () =>
      console.log(
        `Listening for request on port ${port} \nopen app at http://localhost:${port}/hello`
      )
    )
  )
  .catch((err) => console.error(`error listening on port ${port}`, err));
