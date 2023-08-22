const express = require('express');
const router = express.Router();
const { createShortUrl, redirectToLongUrl } = require('./controllers/urlController');

router.get('/', (req, res) => {
  res.render('index');
});

router.post('/shorten', createShortUrl);

router.get('/:shortId', redirectToLongUrl);

module.exports = router;
