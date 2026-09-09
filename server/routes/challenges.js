const express = require('express');
const Challenge = require('../models/Challenge');
const Submission = require('../models/Submission');
const { protect } = require('../middleware/auth');
const router = express.Router();

// Get all challenges
router.get('/', async (req, res) => {
  try {
    const { category, difficulty, language = 'ko' } = req.query;
    let filter = {};
    
    if (category) filter.category = category;
    if (difficulty) filter.difficulty = difficulty;
    
    const challenges = await Challenge.find(filter);
    res.json(challenges);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single challenge
router.get('/:id', async (req, res) => {
  try {
    const challenge = await Challenge.findById(req.params.id);
    if (!challenge) return res.status(404).json({ message: 'Challenge not found' });
    res.json(challenge);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Submit flag
router.post('/:id/submit', protect, async (req, res) => {
  try {
    const { flag } = req.body;
    const challenge = await Challenge.findById(req.params.id);
    
    if (!challenge) return res.status(404).json({ message: 'Challenge not found' });
    
    const submission = new Submission({
      user: req.user.id,
      challenge: req.params.id,
      flag,
      isCorrect: flag === challenge.flag,
      points: flag === challenge.flag ? challenge.points : 0
    });
    
    await submission.save();
    
    if (submission.isCorrect) {
      challenge.solveCount += 1;
      challenge.solvers.push(req.user.id);
      await challenge.save();
      
      const user = await require('../models/User').findById(req.user.id);
      user.points += challenge.points;
      user.solvedChallenges.push(challenge._id);
      await user.save();
    }
    
    res.json({ isCorrect: submission.isCorrect, points: submission.points });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
