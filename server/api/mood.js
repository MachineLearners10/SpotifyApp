const router = require("express").Router();
const User = require("../db/models/user");

router.get("/", async (req, res, next) => {
  try {
    const users = await User.findAll({
      attributes: ["mood", "gender"],
    });
    res.json(users);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
