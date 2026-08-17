import { Router, Request, Response } from 'express';
import { protect } from '../middleware/auth';

const router = Router();

// @route   GET api/journal
// @desc    Retrieve user's private journal entries
// @access  Private
router.get('/', protect, (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    entries: []
  });
});

// @route   POST api/journal
// @desc    Create a new journal entry
// @access  Private
router.post('/', protect, (req: Request, res: Response) => {
  res.status(201).json({
    success: true,
    message: "Gratitude journal entry saved successfully"
  });
});

// @route   PUT api/journal/:id
// @desc    Modify an existing journal entry
// @access  Private
router.put('/:id', protect, (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Journal entry updated successfully"
  });
});

// @route   DELETE api/journal/:id
// @desc    Delete a journal entry
// @access  Private
router.delete('/:id', protect, (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: "Journal entry deleted successfully"
  });
});

export default router;
