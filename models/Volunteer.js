const mongoose = require('mongoose');

const VolunteerSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true },
  dob: { type: String, required: true },
  aadhaar: { type: String, required: true },
  education: { type: String, required: true },
  occupation: { type: String, required: true },
  bloodGroup: { type: String, required: true },
  hobbies: { type: String },
}, { timestamps: true });

module.exports = mongoose.model('Volunteer', VolunteerSchema);
