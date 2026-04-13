const mongoose = require('mongoose');

const InternshipSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  dob: { type: String, required: true },
  aadhaar: { type: String, required: true },
  education: { type: String, required: true },
  college: { type: String, required: true },
  hobbies: { type: String },
  startDate: { type: String, required: true },
  bloodGroup: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('Internship', InternshipSchema);
