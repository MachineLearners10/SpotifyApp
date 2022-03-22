const router = require('express').Router();

// router.get('/me', (req, res) => {
//   res.json(req.user)
// })

router.use('/spotify', require('./spotify'))

module.exports = router
