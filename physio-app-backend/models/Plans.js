const mongoose = require('mongoose');

// Define the schema for treatment plans
const PlanSchema = new mongoose.Schema({
  // Reference to the patient who the plan is for (required)
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient', // References the Patient model
    required: true,
  },
  // The name or title of the plan (required field)
  title: {
    type: String,
    required: true,
  },
  // A description of the plan (optional field, may include goals, objectives, etc.)
  description: {
    type: String,
  },
  // Array of exercises included in the plan (optional field, each exercise is a string for simplicity)
  exercises: [
    {
      name: { type: String, required: true }, // Name of the exercise
      reps: { type: Number }, // Number of repetitions
      sets: { type: Number }, // Number of sets
      duration: { type: Number }, // Duration of the exercise in minutes (if applicable)
    },
  ],
  // The date when the plan was created (automatically set to the current date)
  date: {
    type: Date,
    default: Date.now,
  },
});

// Export the model to use it in other parts of the application
module.exports = mongoose.model('Plan', PlanSchema);
