const express = require("express");
const { isAuthenticatedUser, authorizeRols } = require("../middleware/auth");
const upload = require("../middleware/multer");
const {
  add_slider,
  get_all_offer_slider,
  update_offer_slider,
} = require("../controllers/offer_silder_controller");
const { add_offers, get_all_offers, update_offer, get_app_offers } = require("../controllers/offers_controller");
const router = express.Router();

router
  .route("/action-offer_slider")
  .post(
    isAuthenticatedUser,
    authorizeRols("admin", "Manager"),
    upload.single("image"),
    add_slider
  )
  .put(
    isAuthenticatedUser,
    authorizeRols("admin", "Manager"),
    update_offer_slider
  );

router.route("/offer_slider").get(isAuthenticatedUser, get_all_offer_slider);

//__________________________________________________

router
  .route("/action-offer")
  .post(
    isAuthenticatedUser,
    authorizeRols("admin", "Manager"),
    upload.single("image"),
    add_offers
  )
  router
  .route("/action-offer/:id").put(
  isAuthenticatedUser,
  authorizeRols("admin", "Manager"),
  upload.single("image"),
  update_offer
);
router
  .route("/all-offer")
  .get(isAuthenticatedUser, authorizeRols("admin", "Manager"), get_all_offers);

  router.route("/all-app-offer").get(isAuthenticatedUser, get_app_offers);
module.exports = router;
