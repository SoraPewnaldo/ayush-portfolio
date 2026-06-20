const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: String,
  slug: String,
  description: String,
  category: String,
  subcategory: String,
  thumbnailUrl: String,
  mediaUrls: [String],
  githubUrl: String,
  liveUrl: String,
  technologies: [String],
  featured: Boolean,
  order: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Project', ProjectSchema);
