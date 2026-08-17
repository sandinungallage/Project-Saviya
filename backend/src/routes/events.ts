import { Router, Request, Response } from 'express';
import { protect, admin } from '../middleware/auth';

const router = Router();

// @route   GET api/events
// @desc    Retrieve all active upcoming and completed events
// @access  Public
router.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    events: []
  });
});

// @route   POST api/events
// @desc    Publish a new Leo Club event
// @access  Private/Admin
router.post('/', protect, admin, (req: Request, res: Response) => {
  res.status(201).json({
    success: true,
    message: "Leo Club wellness event created successfully"
  });
});

export default router;
