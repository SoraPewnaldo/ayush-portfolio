const express = require('express');
const router = express.Router();
const path = require('path');
const Content = require('../models/Content');
const Project = require('../models/Project');
const Resume = require('../models/Resume');

// GET /api/content
router.get('/content', async (req, res) => {
  try {
    const contents = await Content.find();
    res.json(contents);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/content/:category
router.get('/content/:category', async (req, res) => {
  try {
    const contents = await Content.find({ category: req.params.category });
    res.json(contents);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/projects
router.get('/projects', async (req, res) => {
  try {
    const projects = await Project.find().sort({ order: 1, createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/projects/:category
router.get('/projects/:category', async (req, res) => {
  try {
    const projects = await Project.find({ category: req.params.category }).sort({ order: 1, createdAt: -1 });
    res.json(projects);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/resume
router.get('/resume', async (req, res) => {
  try {
    res.json({ fileUrl: '/api/resume/download' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/resume/download
router.get('/resume/download', (req, res) => {
  const filePath = path.join(__dirname, '../../archive/Ayush Dakwal Resume.pdf');
  res.download(filePath, 'Ayush Dakwal Resume.pdf', (err) => {
    if (err) {
      console.error('Error downloading resume:', err);
      res.status(404).send('Resume file not found.');
    }
  });
});

module.exports = router;

