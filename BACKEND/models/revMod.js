const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
const testimonialSchema = mongoose.Schema({
  testimonial: [{ name: String, review: String }],
});

const reviewModel = mongoose.model("reviewModel", reviewSchema);
const testiModel = mongoose.model("testiModel", testimonialSchema);
module.exports = { reviewModel, testiModel };
