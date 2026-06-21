const express = require('express');
const router = express.Router();
const path = require('path');
const Content = require('../models/Content');
const Project = require('../models/Project');

// Simple alphanumeric + dash/underscore category validator
const isValidCategory = (str) => /^[a-zA-Z0-9_-]{1,50}$/.test(str);

// GET /api/content
router.get('/content', async (req, res, next) => {
  try {
    const contents = await Content.find();
    res.json(contents);
  } catch (err) {
    next(err); // delegated to global error handler — no internal info leaked
  }
});

// GET /api/content/:category
router.get('/content/:category', async (req, res, next) => {
  const { category } = req.params;
  if (!isValidCategory(category)) {
    return res.status(400).json({ error: 'Invalid category.' });
  }
  try {
    const contents = await Content.find({ category });
    res.json(contents);
  } catch (err) {
    next(err);
  }
});

// GET /api/projects
router.get('/projects', async (req, res, next) => {
  try {
    const projects = await Project.find().sort({ order: 1, createdAt: -1 });
    res.json(projects);
  } catch (err) {
    next(err);
  }
});

// GET /api/projects/:category
router.get('/projects/:category', async (req, res, next) => {
  const { category } = req.params;
  if (!isValidCategory(category)) {
    return res.status(400).json({ error: 'Invalid category.' });
  }
  try {
    const projects = await Project.find({ category }).sort({ order: 1, createdAt: -1 });
    res.json(projects);
  } catch (err) {
    next(err);
  }
});

// GET /api/resume/download
router.get('/resume/download', (req, res, next) => {
  // Path is hardcoded — no user input, no path traversal risk
  const filePath = path.join(__dirname, '../../archive/Ayush Dakwal Resume.pdf');
  res.download(filePath, 'Ayush Dakwal Resume.pdf', (err) => {
    if (err) {
      console.error('[RESUME] Download error:', err.message);
      res.status(404).send('Resume file not found.');
    }
  });
});

module.exports = router;
