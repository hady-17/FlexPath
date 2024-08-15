const Plan = require('../models/Plan');

// Add a new plan
const addPlan = async (req, res) => {
  const { patient, title, description, exercises } = req.body;

  try {
    const newPlan = new Plan({
      patient,
      title,
      description,
      exercises,
    });

    const plan = await newPlan.save();
    res.json(plan);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get all plans
const getPlans = async (req, res) => {
  try {
    const plans = await Plan.find().populate('patient');
    res.json(plans);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get a plan by ID
const getPlanById = async (req, res) => {
  try {
    const plan = await Plan.findById(req.params.id).populate('patient');
    if (!plan) return res.status(404).json({ msg: 'Plan not found' });
    res.json(plan);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Update a plan by ID
const updatePlan = async (req, res) => {
  const { title, description, exercises } = req.body;

  try {
    const plan = await Plan.findById(req.params.id);
    if (!plan) return res.status(404).json({ msg: 'Plan not found' });

    if (title) plan.title = title;
    if (description) plan.description = description;
    if (exercises) plan.exercises = exercises;

    await plan.save();
    res.json(plan);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Delete a plan by ID
const deletePlan = async (req, res) => {
  try {
    const plan = await Plan.findById(req.params.id);
    if (!plan) return res.status(404).json({ msg: 'Plan not found' });

    await plan.remove();
    res.json({ msg: 'Plan removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

module.exports = { addPlan, getPlans, getPlanById, updatePlan, deletePlan };
