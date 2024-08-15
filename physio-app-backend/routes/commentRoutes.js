const express = require('express');
const router = express.Router();
const { addComment, getComments, getCommentById, updateComment, deleteComment } = require('../controllers/commentController');

// @route POST /api/comments
// @desc Add a new comment
router.post('/', addComment);

// @route GET /api/comments
// @desc Get all comments
router.get('/', getComments);

// @route GET /api/comments/:id
// @desc Get a comment by ID
router.get('/:id', getCommentById);

// @route PUT /api/comments/:id
// @desc Update a comment by ID
router.put('/:id', updateComment);

// @route DELETE /api/comments/:id
// @desc Delete a comment by ID
router.delete('/:id', deleteComment);

module.exports = router;
