import { Router, Request, Response } from 'express';
import { protect } from '../middleware/auth';

const router = Router();

// @route   GET api/mood
// @desc    Retrieve user's historical mood tracker logs
// @access  Private
router.get('/', protect, (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    history: []
  });
});

// @route   POST api/mood
// @desc    Save a daily mood score
// @access  Private
router.post('/', protect, (req: Request, res: Response) => {
  res.status(201).json({
    success: true,
    message: "Mood entry logged successfully"
  });
});

export default router;
