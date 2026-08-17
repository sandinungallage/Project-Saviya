import { Router, Request, Response } from 'express';
import jwt from 'jsonwebtoken';
import { ENV } from '../config/env';

const router = Router();

// @route   POST api/auth/guest
// @desc    Register a temporary anonymous Guest session
// @access  Public
router.post('/guest', (req: Request, res: Response) => {
  try {
    // Generate a mock unique guest ID
    const guestId = `guest_${Math.random().toString(36).substring(2, 11)}`;
    
    // Generate a lightweight JWT token
    const token = jwt.sign({ id: guestId, role: 'guest' }, ENV.JWT_SECRET, { expiresIn: '7d' });

    res.status(201).json({
      success: true,
      token,
      user: {
        id: guestId,
        name: "Anonymous Guest",
        role: "guest"
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error during guest creation' });
  }
});

// @route   POST api/auth/google
// @desc    Google login validation placeholder
// @access  Public
router.post('/google', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Google Authentication endpoint placeholder"
  });
});

// @route   POST api/auth/logout
// @desc    Logout and clear local headers
// @access  Public
router.post('/logout', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Session logged out successfully"
  });
});

export default router;
