const express = require('express');
const Submission = require('../models/Submission');
const { protect } = require('../middleware/auth');
const router = express.Router();

// Get user submissions
router.get('/user', protect, async (req, res) => {
  try {
    const submissions = await Submission.find({ user: req.user.id })
      .populate('challenge')
      .sort({ submitTime: -1 });
    res.json(submissions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get challenge submissions
router.get('/challenge/:id', async (req, res) => {
  try {
    const submissions = await Submission.find({ challenge: req.params.id })
      .populate('user')
      .sort({ submitTime: -1 });
    res.json(submissions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
