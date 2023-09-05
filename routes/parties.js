const express = require("express");
const router = express.Router();
const controller = require("../controller/Cparties");
const verifyController = require("../controller/Cverify");

router.post("/verify", verifyController.verify);

router.get("/", controller.index);

router.get("/host", controller.hostParty);

router.post("/host", controller.hostPartyPost);

router.get("/:partyId", controller.partyDetail);
module.exports = router;
