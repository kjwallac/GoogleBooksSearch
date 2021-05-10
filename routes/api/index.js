const router = require("express").Router();
const booksRoutes = require("./books");
const googleRoutes = require("./google");


// Post routes
router.use("/google", googleRoutes);
router.use("/books", booksRoutes);

module.exports = router;
