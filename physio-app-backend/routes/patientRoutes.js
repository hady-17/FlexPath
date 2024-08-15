const express = require('express');
const router = express.Router();
const { addPatient, getPatients, getPatientById, updatePatient, deletePatient } = require('../controllers/patientController');
const auth = require('../middleware/auth');
// @route POST /api/patients
// @desc Add a new patient
router.post('/',auth, addPatient);

// @route GET /api/patients
// @desc Get all patients
router.get('/',auth, getPatients);

// @route GET /api/patients/:id
// @desc Get a patient by ID
router.get('/:id',auth, getPatientById);

// @route PUT /api/patients/:id
// @desc Update a patient by ID
router.put('/:id',auth, updatePatient);

// @route DELETE /api/patients/:id
// @desc Delete a patient by ID
router.delete('/:id',auth, deletePatient);

module.exports = router;
