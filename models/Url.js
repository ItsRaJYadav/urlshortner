const mongoose = require('mongoose');
const shortid = require('shortid');

const urlSchema = new mongoose.Schema({
  longUrl: {
    type: String,
    required: true
  },
  shortId: {
    type: String,
    default: shortid.generate
  }
});

module.exports = mongoose.model('Url', urlSchema);
