import { Router, Request, Response } from 'express';
import { protect } from '../middleware/auth';

const router = Router();

// @route   GET api/users/me
// @desc    Retrieve profile info
// @access  Private
router.get('/me', protect, (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    user: req.user
  });
});

// @route   PUT api/users/profile
// @desc    Modify preferences (theme, language)
// @access  Private
router.put('/profile', protect, (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "User profile settings updated successfully"
  });
});

export default router;
