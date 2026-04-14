const mongoose = require('mongoose');

const InternshipSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, index: true },
  dob: { type: Date, required: true },
  aadhaar: { type: String, required: true },
  education: { type: String, required: true },
  college: { type: String, required: true },
  hobbies: { type: String },
  startDate: { type: Date, required: true },
  bloodGroup: { type: String, required: true },
}, { timestamps: true });

InternshipSchema.index({ createdAt: -1 });

const Internship = mongoose.model('Internship', InternshipSchema);

module.exports = Internship;
