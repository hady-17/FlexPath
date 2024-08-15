const Comment = require('../models/Comment');

// Add a new comment
const addComment = async (req, res) => {
  const { patient, content } = req.body;

  try {
    const newComment = new Comment({
      patient,
      content,
      therapist: req.user.id,
    });

    const comment = await newComment.save();
    res.json(comment);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get all comments
const getComments = async (req, res) => {
  try {
    const comments = await Comment.find({ therapist: req.user.id }).populate('patient');
    res.json(comments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Get a comment by ID
const getCommentById = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id).populate('patient');
    if (!comment) return res.status(404).json({ msg: 'Comment not found' });
    res.json(comment);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Update a comment by ID
const updateComment = async (req, res) => {
  const { content } = req.body;

  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) return res.status(404).json({ msg: 'Comment not found' });

    if (content) comment.content = content;

    await comment.save();
    res.json(comment);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

// Delete a comment by ID
const deleteComment = async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.id);
    if (!comment) return res.status(404).json({ msg: 'Comment not found' });

    await comment.remove();
    res.json({ msg: 'Comment removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

module.exports = { addComment, getComments, getCommentById, updateComment, deleteComment };
