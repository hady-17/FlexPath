const Patient = require('../models/Patient');

// Add a new patient
const addPatient = async (req, res) => {
  const { name, email, age, medicalHistory } = req.body;

  try {
    const newPatient = new Patient({
      therapist: req.user.id,
      name,
      email,
      age,
      medicalHistory,
    });

    const patient = await newPatient.save();
    res.json(patient);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get all patients
const getPatients = async (req, res) => {
  try {
    const patients = await Patient.find({ therapist: req.user.id });
    res.json(patients);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get a patient by ID
const getPatientById = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) return res.status(404).json({ msg: 'Patient not found' });
    res.json(patient);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Update a patient by ID
const updatePatient = async (req, res) => {
  const { name, email, age, medicalHistory } = req.body;

  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) return res.status(404).json({ msg: 'Patient not found' });

    if (name) patient.name = name;
    if (email) patient.email = email;
    if (age) patient.age = age;
    if (medicalHistory) patient.medicalHistory = medicalHistory;

    await patient.save();
    res.json(patient);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Delete a patient by ID
const deletePatient = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) return res.status(404).json({ msg: 'Patient not found' });

    await patient.remove();
    res.json({ msg: 'Patient removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

module.exports = { addPatient, getPatients, getPatientById, updatePatient, deletePatient };
