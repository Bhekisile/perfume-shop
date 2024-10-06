import express from 'express';
const router = express.Router();
import asyncHandler from '../middleware/asyncHandler.js';
import Perfume from '../models/perfumeModel.js';

// Get all perfumes from the database
router.get('/', asyncHandler (async (req, res) => {
  const perfumes = await Perfume.find({});
  res.json(perfumes);
}));

// Get perfume by ID
router.get('/:id', asyncHandler(async (req, res) => {
  const perfume = await Perfume.findById( req.params.id);

  if (perfume) {
    return res.json(perfume);
  }

  res.status(404).json({ message: 'Perfume not found' });

}));

export default router;