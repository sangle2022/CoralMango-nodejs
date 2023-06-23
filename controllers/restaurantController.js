const asyncHandler = require("express-async-handler");
const Restaurant = require("../models/restaurantModel");
const Review = require("../models/reviewModel");

const getMyRestaurant = asyncHandler(async (req, res) => {
  const restaurants = await Restaurant.find({});
  res.json(restaurants);
});

const getSingleRestaurant = asyncHandler(async (req, res) => {
  const restaurant = await Restaurant.findById(req.params.id);

  if (restaurant) {
    res.json(restaurant);
  } else {
    res.status(404).json({ message: "Restaurant Not Found" });
  }
});

const addReview = asyncHandler(async (req, res) => {
  const { review, id } = req.body;
  if (!review) {
    res.status(400);
    throw new Error("No review Found");
    return;
  } else {
    const addReview = new Review({
      restaurant: id,
      reviewText: review,
    });

    const createReview = await addReview.save();
    res.status(201).json(createReview);
  }
});

module.exports = { addReview, getMyRestaurant, getSingleRestaurant };
