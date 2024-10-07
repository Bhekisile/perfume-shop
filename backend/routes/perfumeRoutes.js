import express from 'express';
const router = express.Router();
import { getPerfumes, getPerfumeById, createPerfumeReview } from '../controllers/perfumeController.js';

router.route('/').get(getPerfumes);
router.route('/:id').get(getPerfumeById);
router.route('/:id/reviews').post(createPerfumeReview);

export default router;