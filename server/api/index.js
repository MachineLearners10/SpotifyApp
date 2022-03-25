const router = require("express").Router();

router.use("/songs", require("./songs"));

module.exports = router;
