const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  description: { type: String },
  imageUrl: { type: String }
}, { timestamps: true });

TeamSchema.index({ createdAt: -1 });

const Team = mongoose.model('Team', TeamSchema);

module.exports = Team;
