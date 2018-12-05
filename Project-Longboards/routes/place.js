const express = require("express");
const placeController = require("../controllers/place");

const router = express.Router();

// Routes
router.post("/new", placeController.create);
router.get("/places", placeController.get);
router.get("/places/:_id", placeController.getById);
router.put("/places/:_id", placeController.updatePlace);
router.delete("/places/:_id", placeController.deletePlace);

module.exports = router;
