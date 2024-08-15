const mongoose = require('mongoose');

// Define the schema for patient tests/assessments
const TestSchema = new mongoose.Schema({
  // Reference to the patient who the test is for (required)
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient', // References the Patient model
    required: true,
  },
  // The name or title of the test (required field)
  title: {
    type: String,
    required: true,
  },
  // The result or score of the test (optional field)
  result: {
    type: String,
  },
  // Additional notes about the test (optional field)
  notes: {
    type: String,
  },
  // The date when the test was conducted (automatically set to the current date)
  date: {
    type: Date,
    default: Date.now,
  },
});

// Export the model to use it in other parts of the application
module.exports = mongoose.model('Test', TestSchema);
