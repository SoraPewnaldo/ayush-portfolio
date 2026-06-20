const mongoose = require('mongoose');

const ContentSchema = new mongoose.Schema({
  title: String,
  slug: String,
  content: String,
  category: {
    type: String,
    enum: ['cybersecurity', 'design', 'video', 'beyond-screen', 'about', 'academic', 'freelance', 'extracurricular']
  }
});

module.exports = mongoose.model('Content', ContentSchema);
