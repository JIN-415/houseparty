const express = require("express");
const router = express.Router();
const controller = require("../controller/Csignin");

router.get("/", controller.index);

router.post("/", controller.signinPost);

router.get("/search", controller.searchID);

module.exports = router;
