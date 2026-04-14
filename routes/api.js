const express = require('express');
const router = express.Router();
const Volunteer = require('../models/Volunteer');
const Internship = require('../models/Internship');
const Event = require('../models/Event');
const Team = require('../models/Team');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');
const { validate, volunteerSchema, internshipSchema, eventSchema, teamSchema, loginSchema } = require('../utils/validation');

router.post('/admin/login', validate(loginSchema), (req, res) => {
  const { email, password } = req.body;
  if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
    const payload = { admin: { id: 'admin_1' } };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '24h' });
    return res.json({ token });
  } else {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
});

router.post('/volunteer', validate(volunteerSchema), async (req, res) => {
  try {
    const newVolunteer = new Volunteer(req.body);
    await newVolunteer.save();
    res.status(201).json({ message: 'Volunteer application submitted successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit application' });
  }
});

router.get('/volunteer', auth, async (req, res) => {
  try {
    const volunteers = await Volunteer.find().sort({ createdAt: -1 });
    res.status(200).json(volunteers);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch volunteers' });
  }
});

router.post('/internship', validate(internshipSchema), async (req, res) => {
  try {
    const newInternship = new Internship(req.body);
    await newInternship.save();
    res.status(201).json({ message: 'Internship application submitted successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to submit application' });
  }
});

router.get('/internship', auth, async (req, res) => {
  try {
    const internships = await Internship.find().sort({ createdAt: -1 });
    res.status(200).json(internships);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch internships' });
  }
});

router.get('/events', async (req, res) => {
  try {
    const events = await Event.find().sort({ date: -1 });
    res.status(200).json(events);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch events' });
  }
});

router.post('/events', auth, validate(eventSchema), async (req, res) => {
  try {
    const newEvent = new Event(req.body);
    await newEvent.save();
    res.status(201).json({ message: 'Event created successfully!', event: newEvent });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create event' });
  }
});

router.put('/events/:id', auth, validate(eventSchema), async (req, res) => {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedEvent) return res.status(404).json({ error: 'Event not found' });
    res.status(200).json({ message: 'Event updated successfully!', event: updatedEvent });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update event' });
  }
});

router.delete('/events/:id', auth, async (req, res) => {
  try {
    const deletedEvent = await Event.findByIdAndDelete(req.params.id);
    if (!deletedEvent) return res.status(404).json({ error: 'Event not found' });
    res.status(200).json({ message: 'Event deleted successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete event' });
  }
});

router.get('/teams', async (req, res) => {
  try {
    const teams = await Team.find().sort({ createdAt: -1 });
    res.status(200).json(teams);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch teams' });
  }
});

router.post('/teams', auth, validate(teamSchema), async (req, res) => {
  try {
    const newTeam = new Team(req.body);
    await newTeam.save();
    res.status(201).json({ message: 'Team member created successfully!', team: newTeam });
  } catch (error) {
    res.status(500).json({ error: 'Failed to create team member' });
  }
});

router.put('/teams/:id', auth, validate(teamSchema), async (req, res) => {
  try {
    const updatedTeam = await Team.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedTeam) return res.status(404).json({ error: 'Team member not found' });
    res.status(200).json({ message: 'Team updated successfully!', team: updatedTeam });
  } catch (error) {
    res.status(500).json({ error: 'Failed to update team member' });
  }
});

router.delete('/teams/:id', auth, async (req, res) => {
  try {
    const deletedTeam = await Team.findByIdAndDelete(req.params.id);
    if (!deletedTeam) return res.status(404).json({ error: 'Team member not found' });
    res.status(200).json({ message: 'Team member deleted successfully!' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete team member' });
  }
});

module.exports = router;
