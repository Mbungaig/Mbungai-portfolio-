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
    subMessages: [{ name: String, msg: String }],
  },
  {
    timestamps: true,
  }
);

const reviewModel = mongoose.model("reviewModel", reviewSchema);
module.exports = { reviewModel };
