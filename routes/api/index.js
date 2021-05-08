const router = require("express").Router();
const bookRoutes = require("./books");
const googleRoutes = require("./google");


// Post routes
router.use("/google", googleRoutes);

module.exports = router;
