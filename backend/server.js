import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import connectDB from './config/db.js';
import perfumes from './data/perfumes.js';
const port = process.env.PORT || 5000;

connectDB(); // Connect to MongoDB

const app = express();

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.get('/api/perfumes', (req, res) => {
  res.json(perfumes);
});

app.get('/api/perfumes/:id', (req, res) => {
  const perfume = perfumes.find((p) => p._id.toString() === req.params.id);
  res.json(perfume);
});

app.listen(port, () => console.log(`Server running on port ${port}`));