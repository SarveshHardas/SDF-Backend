const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  imageUrl: { type: String },
  url: { type: String },
  order: { type: Number, default: 0 }
}, { timestamps: true });

TeamSchema.index({ order: 1 });

const Team = mongoose.model('Team', TeamSchema);

module.exports = Team;
