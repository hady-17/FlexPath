const mongoose = require('mongoose');

// Define the schema for tracking patient progress
const ProgressSchema = new mongoose.Schema({
  // Reference to the patient whose progress is being tracked (required)
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient', // References the Patient model
    required: true,
  },
  // Reference to the plan or specific exercise (optional field)
  plan: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Plan', // References the Plan model
  },
  // The date when the progress was recorded (required field)
  date: {
    type: Date,
    required: true,
  },
  // A short description of the progress made (optional field)
  progressDescription: {
    type: String,
  },
  // Any metrics or scores related to progress (optional field)
  metrics: {
    type: String,
  },
});

// Export the model to use it in other parts of the application
module.exports = mongoose.model('Progress', ProgressSchema);
