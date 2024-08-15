const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getProfile, updateProfile } = require('../controllers/userController');
const auth = require('../middleware/auth');
// @route POST /api/users/register
// @desc Register a new user
router.post('/register',auth, registerUser);

// @route POST /api/users/login
// @desc Login user
router.post('/login',auth, loginUser);

// @route GET /api/users/profile
// @desc Get user profile
router.get('/profile',auth, getProfile);

// @route PUT /api/users/profile
// @desc Update user profile
router.put('/profile',auth, updateProfile);

module.exports = router;
