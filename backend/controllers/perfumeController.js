import asyncHandler from '../middleware/asyncHandler.js';
import Perfume from '../models/perfumeModel.js';

// @desc    Fetch all perfumes
// @route   GET /api/perfumes
// @access  Public
const getPerfumes = asyncHandler(async (req, res) => {
  const perfumes = await Perfume.find({});
  res.json(perfumes);
});

// @desc    Fetch single perfume
// @route   GET /api/perfumes/:id
// @access  Public
const getPerfumeById = asyncHandler(async (req, res) => {
  const perfume = await Perfume.findById(req.params.id);

  if (perfume) {
    return res.json(perfume);
  } else {
    res.status(404);
    throw new Error('Resource not found');
  }
});

export { getPerfumes, getPerfumeById };