const mongoose = require("mongoose");

const restaurantSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const Restaurant = mongoose.model("restaurant", restaurantSchema);

module.exports = Restaurant;
