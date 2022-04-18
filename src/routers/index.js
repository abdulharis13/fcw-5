//import
const express = require("express");
const router = express.Router();

//controller
const rootController = require("../controllers/root");
const user = require("../controllers/user");

router.get("/", rootController.home);
router.get("/play", rootController.play);
router.get("/singleData/:id", user.singleData);
router.get("/loginPage", rootController.loginPage);
router.post("/login", user.login);
module.exports = router;
