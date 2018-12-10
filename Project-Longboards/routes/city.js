const express = require("express");
const cityController = require("../controllers/city");

const router = express.Router();

// Routes
router.post("/new-city", cityController.create);
router.get("", cityController.get);
router.get("/:_id", cityController.getById);
router.put("/:_id", cityController.updateCity);
router.delete("/:_id", cityController.deleteCity);

module.exports = router;
