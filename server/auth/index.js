const refresh = require("passport-oauth2-refresh");
const router = require("express").Router();

router.use("/spotify", require("./spotify"));

router.get("/", (request, response) => {
  if (request.user == null) {
    response.sendStatus(401);
  }
  refresh.requestNewAccessToken(
    "spotify",
    request.user.refreshToken,
    function (err, accessToken, refreshToken) {
      const user = {
        id: request.user.id,
        email: request.user.email,
        spotifyId: request.user.spotifyId,
        token: accessToken,
      };
      response.json(user);
    }
  );
});

module.exports = router;
