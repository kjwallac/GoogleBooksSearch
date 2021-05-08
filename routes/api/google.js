const router = require("express").Router();
const googleController = require("../../controllers/googleController");

router
  .route("/:search")
  .get(googleController.find)
  

module.exports = router;
