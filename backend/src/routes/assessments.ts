import { Router, Request, Response } from 'express';
import { protect } from '../middleware/auth';

const router = Router();

// @route   GET api/assessments
// @desc    Retrieve active wellness screening tests list
// @access  Public
router.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Assessments retrieved successfully",
    data: []
  });
});

// @route   POST api/assessments/submit
// @desc    Calculate and submit screening score
// @access  Private
router.post('/submit', protect, (req: Request, res: Response) => {
  res.status(201).json({
    success: true,
    message: "Assessment score calculated and logged successfully"
  });
});

export default router;
