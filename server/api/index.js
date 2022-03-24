const router = require("express").Router();

router.use("/songs", require("./songs"));
router.use("/artists", require("./artists"));

module.exports = router;
