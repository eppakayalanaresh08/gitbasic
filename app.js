// index.js

const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// API route to get all items
app.get('/api/items', (req, res) => {
  const items = [
    { id: 1, name: 'Item One' },
    { id: 2, name: 'Item Two' },
  ];
  res.json(items);
});

// API route to get a single item by id
app.get('/api/items/:id', (req, res) => {
  const itemId = parseInt(req.params.id);
  const item = { id: itemId, name: `Item ${itemId}` };
  res.json(item);
});

// API route to create a new item
app.post('/api/items', (req, res) => {
  const newItem = req.body;
  newItem.id = Date.now(); // Simple ID generation
  res.status(201).json(newItem);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
