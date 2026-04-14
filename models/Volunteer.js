const mongoose = require('mongoose');

const VolunteerSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, index: true },
  dob: { type: Date, required: true },
  aadhaar: { type: String, required: true },
  education: { type: String, required: true },
  occupation: { type: String, required: true },
  bloodGroup: { type: String, required: true },
  hobbies: { type: String },
}, { timestamps: true });

VolunteerSchema.index({ createdAt: -1 });

const Volunteer = mongoose.model('Volunteer', VolunteerSchema);

module.exports = Volunteer;
