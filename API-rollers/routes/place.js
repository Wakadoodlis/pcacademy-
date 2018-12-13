const express = require("express");
const placeController = require("../controllers/place");

const router = express.Router();

// Routes
router.post("/new", placeController.create);
router.get("", placeController.get);
router.get("/:_id", placeController.getById);
router.put("/:_id", placeController.updatePlace);
router.delete("/:_id", placeController.deletePlace);

module.exports = router;
