const router = require("express").Router();

router.use("/spotify", require("./spotify"));

router.get("/", (request, response) => {
  if (request.user == null) {
    response.setStatus(401);
  }

  const user = {
    id: request.user.id,
    email: request.user.email,
    spotifyId: request.user.spotifyId,
    token: request.user.token,
  };

  response.json(user);
});

module.exports = router;
