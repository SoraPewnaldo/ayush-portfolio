require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

// Allowlist only your actual domain (and localhost in dev)
const allowedOrigins = [
  'https://sorapew.tech',
  'https://www.sorapew.tech',
  ...(process.env.NODE_ENV !== 'production' ? ['http://localhost:5173'] : []),
];

app.use(cors({
  origin: (origin, callback) => {
    // Allow requests with no origin (e.g., curl) only in dev
    if (!origin && process.env.NODE_ENV !== 'production') return callback(null, true);
    if (allowedOrigins.includes(origin)) return callback(null, true);
    callback(new Error('CORS: Origin not allowed'));
  },
  methods: ['GET'],
  allowedHeaders: ['Content-Type'],
}));

app.use(express.json({ limit: '10kb' })); // prevent large payload attacks

// MongoDB connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/ayush_os')
  .then(() => console.log('[DB] MongoDB Connected'))
  .catch(err => console.error('[DB] Connection failed:', err.message));

// Routes
app.use('/api', require('./routes/api'));

// Global error handler — never leaks internal error details to clients
app.use((err, req, res, next) => {
  console.error('[ERROR]', {
    message: err.message,
    path: req.path,
    method: req.method,
    timestamp: new Date().toISOString(),
  });
  res.status(err.status || 500).json({ error: 'An unexpected error occurred.' });
});

app.listen(port, () => {
  console.log(`[SERVER] Running on port ${port}`);
});
