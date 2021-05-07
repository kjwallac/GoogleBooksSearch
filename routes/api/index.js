const router = require("express").Router();
const bookRoutes = require("./books");
const googleRoutes = require("./google");


// Post routes
router.use("/", routes);

module.exports = router;
