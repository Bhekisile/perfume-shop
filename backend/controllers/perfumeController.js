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

// @desc    Create a new review
// @route   POST /api/perfumes
// @access  Private/Admin
const createPerfume = asyncHandler(async (req, res) => {
  const perfume = new Perfume({
    name: 'Sample name',
    price: 0,
    user: req.user._id,
    image: '/images/sample.jpg',
    size: [
      {
        name: '30ml',
        total: 0,
      },
      {
        name: '50ml',
        total: 0,
      },
      {
        name: '100ml',
        total: 0,
      },
    ],
    numReviews: 0,
    shortDescription: 'Sample description',
    longDescription: 'Sample description',
  });

  const createdPerfume = await perfume.save();
  res.status(201).json(createdPerfume);
});

// @desc    Update a perfume
// @route   PUT /api/perfumes/:id
// @access  Private/Admin
const updatePerfume = asyncHandler(async (req, res) => {
  const { name, price, shortDescription, longDescription, image, size } = req.body;

  const perfume = await Perfume.findById(req.params.id);

  if (perfume) {
    perfume.name = name;
    perfume.price = price;
    perfume.shortDescription = shortDescription;
    perfume.longDescription = longDescription;
    perfume.image = image;
    perfume.size = size;

    const updatedPerfume = await perfume.save();
    res.json(updatedPerfume);
  } else {
    res.status(404);
    throw new Error('Resource not found');
  }
});

// @desc    Delete a perfume
// @route   DELETE /api/perfumes/:id
// @access  Private/Admin
// const deletePerfume = asyncHandler(async (req, res) => {
//   const perfume = await Perfume.findById(req.params.id);

//   if (perfume) {
//     await perfume.deleteOne(_id: perfume._id);
//     res.status(200).json({ message: 'Perfume deleted' });
//   } else {
//     res.status(404);
//     throw new Error('Resource not found');
//   }
// });

// @desc Create a new review
// @route POST /api/perfumes/:id/reviews
// @access Private
const createPerfumeReview = asyncHandler(async (req, res) => {
  const { rating, comment } = req.body;

  const perfume = await Perfume.findById(req.params.id);

  if (perfume) {
    const alreadyReviewed = perfume.reviews.find(
      (r) => r.user.toString() === req.user._id.toString()
    );

    if (alreadyReviewed) {
      res.status(400);
      throw new Error('Perfume already reviewed');
    }

    const review = {
      name: req.user.name,
      rating: Number(rating),
      comment,
      user: req.user._id,
    };

    perfume.reviews.push(review);

    perfume.numReviews = perfume.reviews.length;

    perfume.rating =
      perfume.reviews.reduce((acc, review) => review.rating + acc, 0) / perfume.reviews.length;

    await perfume.save();
    res.status(201).json({ message: 'Review added' });
  } else {
    res.status(404);
    throw new Error('Resource not found');
  }
});

export { getPerfumes, getPerfumeById, createPerfumeReview };