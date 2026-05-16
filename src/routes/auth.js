'use strict';
const express = require('express');
const router = express.Router();
const { validateCredentials } = require('../services/authService');

// POST /api/auth/login
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }
  const user = validateCredentials(email, password);
  if (!user) {
    return res.status(401).json({ message: 'Invalid credentials.' });
  }
  return res.status(200).json({ message: 'Login successful.', user });
});

// GET /api/auth/users
router.get('/users', (req, res) => {
  const { getAllUsers } = require('../services/authService');
  return res.status(200).json({ users: getAllUsers() });
});

module.exports = router;