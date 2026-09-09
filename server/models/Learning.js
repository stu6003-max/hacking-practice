const mongoose = require('mongoose');

const LearningSchema = new mongoose.Schema({
  title: { 
    ko: String,
    en: String 
  },
  content: { 
    ko: String,
    en: String 
  },
  category: { type: String, enum: ['web', 'crypto', 'pwn', 'forensics', 'reversing', 'misc', 'basics'] },
  level: { type: String, enum: ['beginner', 'intermediate', 'advanced'] },
  order: { type: Number },
  examples: [{
    title: { ko: String, en: String },
    code: String,
    language: String
  }],
  relatedChallenges: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Challenge' }],
  videoUrl: String,
  resourceLinks: [{
    title: { ko: String, en: String },
    url: String
  }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Learning', LearningSchema);
