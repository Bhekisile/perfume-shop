import express from 'express';
const router = express.Router();
import { getPerfumes, getPerfumeById } from '../controllers/perfumeController.js';

router.route('/').get(getPerfumes);
router.route('/:id').get(getPerfumeById);

// // Get all perfumes from the database
// router.get('/', asyncHandler (async (req, res) => {
//   const perfumes = await Perfume.find({});
//   res.json(perfumes);
// }));

// // Get perfume by ID
// router.get('/:id', asyncHandler(async (req, res) => {
//   const perfume = await Perfume.findById( req.params.id);

//   if (perfume) {
//     return res.json(perfume);
//   } else {
//     res.status(404);
//     throw new Error('Resource not found');
//   }
// }));

export default router;