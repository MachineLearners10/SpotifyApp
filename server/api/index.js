const router = require("express").Router();

router.use("/songs", require("./songs"));
router.use("/genre", require("./genre"));

module.exports = router;
