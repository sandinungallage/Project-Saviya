import { Router, Request, Response } from 'express';
import { protect, admin } from '../middleware/auth';

const router = Router();

// @route   GET api/emergency
// @desc    Retrieve all active emergency helplines
// @access  Public
router.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    helplines: []
  });
});

// @route   POST api/emergency
// @desc    Create a new helpline card
// @access  Private/Admin
router.post('/', protect, admin, (req: Request, res: Response) => {
  res.status(201).json({
    success: true,
    message: "Emergency contact helpline created successfully"
  });
});

// @route   PUT api/emergency/:id
// @desc    Modify a helpline card details
// @access  Private/Admin
router.put('/:id', protect, admin, (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Helpline card updated successfully"
  });
});

// @route   DELETE api/emergency/:id
// @desc    Delete a helpline card
// @access  Private/Admin
router.delete('/:id', protect, admin, (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Helpline card deleted successfully"
  });
});

export default router;
