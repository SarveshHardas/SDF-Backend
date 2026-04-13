const mongoose = require('mongoose');

const TeamSchema = new mongoose.Schema({
  name: { type: String, required: true },
  role: { type: String, required: true },
  description: { type: String },
  imageUrl: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Team', TeamSchema);
