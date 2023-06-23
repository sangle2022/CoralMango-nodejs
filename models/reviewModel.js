const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema({
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  reviewText: {
    type: String,
    required: true,
  },
});

const Review = mongoose.model("review", reviewSchema);

module.exports = Review;
