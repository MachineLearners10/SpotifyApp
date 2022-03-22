const router = require('express').Router();

// router.get('/me', (req, res) => {
//   res.json(req.user)
// })

router.use('/spotify', require('./spotify'))

router.get('/', (request, response) => {
  if (request.user == null) {
    response.setStatus(401);
  }

  const user = {
    id: request.user.id,
    email: request.user.email,
    spotifyId: request.user.spotifyId,
  };

  response.json(user);
})

module.exports = router
