const mongoose = require('mongoose');

const ChallengeSchema = new mongoose.Schema({
  title: { 
    ko: String,
    en: String 
  },
  description: { 
    ko: String,
    en: String 
  },
  category: { type: String, enum: ['web', 'crypto', 'pwn', 'forensics', 'reversing', 'misc'] },
  difficulty: { type: String, enum: ['easy', 'medium', 'hard', 'expert'] },
  points: { type: Number, default: 100 },
  flag: { type: String, required: true },
  hints: [{
    ko: String,
    en: String
  }],
  attachments: [String], // File URLs
  authors: [String],
  solvers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
  solveCount: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Challenge', ChallengeSchema);
