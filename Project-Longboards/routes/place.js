const express = require("express");
const placeController = require("../controllers/place");

const router = express.Router();

router.post("/new", placeController.create);
router.get("/getAll", placeController.get);

module.exports = router;
