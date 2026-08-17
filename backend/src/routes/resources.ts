import { Router, Request, Response } from 'express';
import { protect, admin } from '../middleware/auth';

const router = Router();

// @route   GET api/resources
// @desc    Retrieve all published resource articles
// @access  Public
router.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    articles: []
  });
});

// @route   GET api/resources/:slug
// @desc    Retrieve details of a single article
// @access  Public
router.get('/:slug', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Article details retrieved",
    article: null
  });
});

// @route   POST api/resources
// @desc    Publish a new article
// @access  Private/Admin
router.post('/', protect, admin, (req: Request, res: Response) => {
  res.status(201).json({
    success: true,
    message: "Resource article published successfully"
  });
});

export default router;
