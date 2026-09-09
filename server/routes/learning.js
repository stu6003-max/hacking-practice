const express = require('express');
const Learning = require('../models/Learning');
const router = express.Router();

// Get all learning materials
router.get('/', async (req, res) => {
  try {
    const { category, level } = req.query;
    let filter = {};
    
    if (category) filter.category = category;
    if (level) filter.level = level;
    
    const materials = await Learning.find(filter).sort({ order: 1 });
    res.json(materials);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get single learning material
router.get('/:id', async (req, res) => {
  try {
    const material = await Learning.findById(req.params.id)
      .populate('relatedChallenges');
    if (!material) return res.status(404).json({ message: 'Material not found' });
    res.json(material);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
