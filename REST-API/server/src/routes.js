const router = require("express").Router();
const userController = require("./constrollers/userController");
const furtnitureController = require("./constrollers/furtnitureController");

router.use("/users", userController);
router.use("/data/furtnitures", furtnitureController);

module.exports = router;
