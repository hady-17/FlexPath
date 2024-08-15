const mongoose = require('mongoose');

// Define the schema for comments made by therapists on a patient's profile
const CommentSchema = new mongoose.Schema({
  // Reference to the patient the comment is for (required)
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient', // References the Patient model
    required: true,
  },
  // Reference to the therapist who made the comment (required)
  therapist: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', // References the User model (therapist role)
    required: true,
  },
  // The content of the comment (required field)
  content: {
    type: String,
    required: true,
  },
  // The date when the comment was made (automatically set to the current date)
  date: {
    type: Date,
    default: Date.now,
  },
});

// Export the model to use it in other parts of the application
module.exports = mongoose.model('Comment', CommentSchema);
