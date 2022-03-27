const User = require('../db/models/user');
const refresh = require('passport-oauth2-refresh');
const router = require('express').Router();

router.use('/spotify', require('./spotify'));

router.get('/', (request, response) => {
  if (request.user == null) {
    response.sendStatus(401);
  }
  let newToken = ''
  refresh.requestNewAccessToken(
    'spotify',
    request.user.refreshToken,
    function(err, accessToken, refreshToken) {
      const user = {
        id: request.user.id,
        email: request.user.email,
        spotifyId: request.user.spotifyId,
        token: accessToken
      }
      console.log('access token', accessToken)
      console.log('request.user.refreshToken', request.user.refreshToken);
      newToken = accessToken;
      // const user = await User.findOneAndUpdate({
      //    spotifyId: request.user.spotifyId }, {
      //      token: accessToken, refreshToken: refreshToken
      //    });
      response.json(user);
    }
  )


  // const user = {
  //   id: request.user.id,
  //   email: request.user.email,
  //   spotifyId: request.user.spotifyId,
  //   token: request.user.token
  // };
  // response.json(user);
})

router.get('/refresh_token', (request, response) => {
  refresh.requestNewAccessToken(
    'spotify',
    request.user.refreshToken,
    function(err, accessToken, refreshToken) {
      const user = {
        id: request.user.id,
        email: request.user.email,
        spotifyId: request.user.spotifyId,
        token: accessToken
      }
      // const user = await User.findOneAndUpdate({
      //    spotifyId: request.user.spotifyId }, {
      //      token: accessToken, refreshToken: refreshToken
      //    });
      response.json(user);
    }
  )
})

module.exports = router;
