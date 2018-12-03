const express = require("express");
const placeController = require("../controllers/place");

const router = express.Router();

router.get("/test", placeController.test);

module.exports = router;
