const router = require("express").Router();

router.use("/songs", require("./songs"));
router.use("/mood", require("./mood"));

module.exports = router;
