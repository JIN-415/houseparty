const express = require("express");
const router = express.Router();
const controller = require("../controller/Cmain");
const verifyController = require("../controller/Cverify");

router.post("/verify", verifyController.verify);

router.get("/", controller.index);

module.exports = router;
