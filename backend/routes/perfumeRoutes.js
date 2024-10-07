import express from 'express';
const router = express.Router();
import { protect, admin } from '../middleware/authMiddleware.js';
import { getPerfumes, getPerfumeById, createPerfume, updatePerfume, deletePerfume, createPerfumeReview } from '../controllers/perfumeController.js';

router.route('/').get(getPerfumes).post(protect, admin, createPerfume);
router
  .route('/:id')
  .get(getPerfumeById)
  .put(protect, admin, updatePerfume)
  .delete(protect, admin, deletePerfume);
router.route('/:id/reviews').post(protect, createPerfumeReview);

export default router;