
'use strict';
const express = require('express');
const router = express.Router();

const items = [
  { id: 1, name: 'Widget A', price: 9.99 },
  { id: 2, name: 'Widget B', price: 19.99 },
];

// GET /api/items
router.get('/', (req, res) => {
  res.json({ items });
});

// GET /api/items/:id
router.get('/:id', (req, res) => {
  const item = items.find((i) => i.id === parseInt(req.params.id, 10));
  if (!item) return res.status(404).json({ message: 'Item not found.' });
  res.json({ item });
});

// POST /api/items
router.post('/', (req, res) => {
  const { name, price } = req.body;
  if (!name || price === undefined) {
    return res.status(400).json({ message: 'name and price are required.' });
  }
  if (typeof price !== 'number' || price < 0) {
    return res.status(400).json({ message: 'price must be a non-negative number.' });
  }
  const newItem = { id: items.length + 1, name, price };
  items.push(newItem);
  res.status(201).json({ item: newItem });
});

// DELETE /api/items/:id
router.delete('/:id', (req, res) => {
  const idx = items.findIndex((i) => i.id === parseInt(req.params.id, 10));
  if (idx === -1) return res.status(404).json({ message: 'Item not found.' });
  const removed = items.splice(idx, 1)[0];
  res.json({ message: 'Item deleted.', item: removed });
});

module.exports = router;