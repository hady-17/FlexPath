const express = require('express');
const router = express.Router();
const { addTest, getTests, getTestById, updateTest, deleteTest } = require('../controllers/testController');
const auth = require('../middleware/auth');
// @route POST /api/tests
// @desc Add a new test
router.post('/',auth, addTest);

// @route GET /api/tests
// @desc Get all tests
router.get('/',auth, getTests);

// @route GET /api/tests/:id
// @desc Get a test by ID
router.get('/:id',auth, getTestById);

// @route PUT /api/tests/:id
// @desc Update a test by ID
router.put('/:id',auth, updateTest);

// @route DELETE /api/tests/:id
// @desc Delete a test by ID
router.delete('/:id',auth, deleteTest);

module.exports = router;
