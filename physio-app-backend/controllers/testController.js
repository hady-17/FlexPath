const Test = require('../models/Test');

// Add a new test
const addTest = async (req, res) => {
  const { patient, title, description, results } = req.body;

  try {
    const newTest = new Test({
      patient,
      title,
      description,
      results,
    });

    const test = await newTest.save();
    res.json(test);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get all tests
const getTests = async (req, res) => {
  try {
    const tests = await Test.find().populate('patient');
    res.json(tests);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get a test by ID
const getTestById = async (req, res) => {
  try {
    const test = await Test.findById(req.params.id).populate('patient');
    if (!test) return res.status(404).json({ msg: 'Test not found' });
    res.json(test);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Update a test by ID
const updateTest = async (req, res) => {
  const { title, description, results } = req.body;

  try {
    const test = await Test.findById(req.params.id);
    if (!test) return res.status(404).json({ msg: 'Test not found' });

    if (title) test.title = title;
    if (description) test.description = description;
    if (results) test.results = results;

    await test.save();
    res.json(test);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Delete a test by ID
const deleteTest = async (req, res) => {
  try {
    const test = await Test.findById(req.params.id);
    if (!test) return res.status(404).json({ msg: 'Test not found' });

    await test.remove();
    res.json({ msg: 'Test removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

module.exports = { addTest, getTests, getTestById, updateTest, deleteTest };
