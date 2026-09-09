const mongoose = require('mongoose');

const SubmissionSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  challenge: { type: mongoose.Schema.Types.ObjectId, ref: 'Challenge', required: true },
  flag: { type: String, required: true },
  isCorrect: { type: Boolean, default: false },
  points: { type: Number, default: 0 },
  submitTime: { type: Date, default: Date.now },
  attempts: { type: Number, default: 1 }
});

module.exports = mongoose.model('Submission', SubmissionSchema);
