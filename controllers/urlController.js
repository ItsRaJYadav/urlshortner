const Url = require('../models/Url');

async function createShortUrl(req, res) {
  const longUrl = req.body.longUrl;
  const url = new Url({ longUrl });

  try {
    await url.save();
    const shortUrl = `${req.headers.host}/${url.shortId}`;
    res.render('shortUrl', { shortUrl });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
}

async function redirectToLongUrl(req, res) {
  const shortId = req.params.shortId;
  const url = await Url.findOne({ shortId });

  if (url) {
    res.redirect(url.longUrl);
  } else {
    res.status(404).send('Not Found');
  }
}

module.exports = {
  createShortUrl,
  redirectToLongUrl
};
