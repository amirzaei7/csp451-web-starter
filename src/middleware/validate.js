'use strict';

function requireBody(...fields) {
  return (req, res, next) => {
    const missing = fields.filter((f) => req.body[f] === undefined || req.body[f] === '');
    if (missing.length > 0) {
      return res.status(400).json({ message: 'Missing required fields: ' + missing.join(', ') });
    }
    next();
  };
}

function requireJson(req, res, next) {
  if (!req.is('application/json')) {
    return res.status(415).json({ message: 'Content-Type must be application/json' });
  }
  next();
}

module.exports = { requireBody, requireJson };
