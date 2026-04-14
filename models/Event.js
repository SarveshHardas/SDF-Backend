const mongoose = require('mongoose');

const EventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  date: { type: Date, required: true },
  description: { type: String, required: true },
  imageUrl: { type: String, required: true },
}, { timestamps: true });

EventSchema.index({ date: -1 });

const Event = mongoose.model('Event', EventSchema);

module.exports = Event;
