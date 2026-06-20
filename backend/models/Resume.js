const mongoose = require('mongoose');

const ResumeSchema = new mongoose.Schema({
  fileUrl: String,
  version: String,
  uploadDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Resume', ResumeSchema);
