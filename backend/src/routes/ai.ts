import { Router, Request, Response } from 'express';
import { protect } from '../middleware/auth';
import { authAiLimiter } from '../middleware/rateLimiter';

const router = Router();

// @route   POST api/ai/chat
// @desc    Interact with Sahanaya wellness AI
// @access  Private
router.post('/chat', protect, authAiLimiter, (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Placeholder chatbot response. In the future, this will evaluate query inputs for crisis terms and reply using the AI Service."
  });
});

// @route   GET api/ai/history
// @desc    Fetch recent chat logs
// @access  Private
router.get('/history', protect, (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    history: []
  });
});

export default router;
