const Joi = require('joi');

const volunteerSchema = Joi.object({
  firstName: Joi.string().trim().required(),
  lastName: Joi.string().trim().required(),
  address: Joi.string().trim().required(),
  city: Joi.string().trim().required(),
  phone: Joi.string().pattern(/^[0-9]{10}$/).required(),
  email: Joi.string().email().required(),
  dob: Joi.date().required(),
  aadhaar: Joi.string().pattern(/^[0-9]{12}$/).required(),
  education: Joi.string().trim().required(),
  occupation: Joi.string().trim().required(),
  bloodGroup: Joi.string().trim().required(),
  hobbies: Joi.string().trim().allow('').optional(),
});

const internshipSchema = Joi.object({
  firstName: Joi.string().trim().required(),
  lastName: Joi.string().trim().required(),
  address: Joi.string().trim().required(),
  city: Joi.string().trim().required(),
  phone: Joi.string().pattern(/^[0-9]{10}$/).required(),
  email: Joi.string().email().required(),
  dob: Joi.date().required(),
  aadhaar: Joi.string().pattern(/^[0-9]{12}$/).required(),
  education: Joi.string().trim().required(),
  college: Joi.string().trim().required(),
  startDate: Joi.date().required(),
  bloodGroup: Joi.string().trim().required(),
  hobbies: Joi.string().trim().allow('').optional(),
});

const eventSchema = Joi.object({
  title: Joi.string().trim().required(),
  date: Joi.date().required(),
  description: Joi.string().trim().required(),
  imageUrl: Joi.string().uri().required(),
});

const teamSchema = Joi.object({
  name: Joi.string().trim().required(),
  role: Joi.string().trim().required(),
  description: Joi.string().trim().optional(),
  imageUrl: Joi.string().uri().optional(),
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const validate = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body, { abortEarly: false, stripUnknown: true });
    if (!error) req.body = value;
    if (error) {
      return res.status(400).json({ error: 'Invalid input', details: error.details.map(d => d.message) });
    }
    next();
  };
};

module.exports = {
  validate,
  volunteerSchema,
  internshipSchema,
  eventSchema,
  teamSchema,
  loginSchema,
};
