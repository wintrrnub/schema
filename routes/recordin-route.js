const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/authenticate");
const recordincontroller = require("../controllers/recordin-controller");

router.get("/", authenticate, recordincontroller.getByUser);

module.exports = router;
