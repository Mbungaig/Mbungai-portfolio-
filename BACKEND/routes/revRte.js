const express = require("express");
const router = express.Router();
const { reviewModel } = require("../models/reviewModels");

router.post("/new-review", (req, res, next) => {
  const dt = {
    name: req.body.name,
    email: req.body.email,
    message: req.body.review,
  };
  const newReview = new reviewModel(dt);
  newReview
    .save()
    .then(() => {
      console.log("SAved!!");
      res.end("done");
    })
    .catch((err) => {
        console.error(err);
        res.end("error");
    });
  next();
});

router.get('/', (req, res, next) => {
  console.log("Request maid");
  res.end("done");
});

module.exports = router;
