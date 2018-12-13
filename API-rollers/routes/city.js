const express = require("express");
const cityController = require("../controllers/city");

const router = express.Router();

// Routes
router.post("/new", cityController.create);
router.get("", cityController.get);
router.delete("/:_id", cityController.deleteCity);

module.exports = router;
