const express = require("express");
const {
  addReview,
  getSingleRestaurant,
  getMyRestaurant,
} = require("../controllers/restaurantController");

const router = express.Router();

router.route("/myrestaurant").get(getMyRestaurant);
router.route("/myrestaurant/:id").get(getSingleRestaurant);

router.route("/addreview").post(addReview);
// router.route("/myrestaurant").get( getMyRestaurant);

module.exports = router;
