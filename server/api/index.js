const router = require("express").Router();

router.use("/songs", require("./songs"));
router.use("/recommendation", require("./recommendation"));

module.exports = router;
