const express = require("express");
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");

const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const {validteReview, isLoggedIn, isReviewAuthor} = require("../middleware.js");



const reviewController = require("../controllers/reviews.js");
  
 // Reviews
  // Post  reviews route
  router.post("/",isLoggedIn, validteReview, wrapAsync (reviewController.createReview));
      
      // delete reviews route
    
      router.delete(
        "/:reviewId",
        isLoggedIn,
        isReviewAuthor,
        wrapAsync(reviewController.destroyReview)
      );

      module.exports = router;