const mongoose = require('mongoose');

// Define the schema for patients
const PatientSchema = new mongoose.Schema({
  // Reference to the therapist who manages this patient (required)
  therapist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // References the User model, assuming therapists are users
    required: true,
  },
  // The patient's full name (required field)
  name: {
    type: String,
    required: true,
  },
  // The patient's email (optional field)
  email: {
    type: String,
  },
  // The patient's age (optional field)
  age: {
    type: Number,
  },
  // The patient's medical history (optional field, may include previous injuries, surgeries, etc.)
  medicalHistory: {
    type: String,
  },
  // The date when the patient was created (automatically set to the current date)
  date: {
    type: Date,
    default: Date.now,
  },
});

// Export the model to use it in other parts of the application
module.exports = mongoose.model('Patient', PatientSchema);
