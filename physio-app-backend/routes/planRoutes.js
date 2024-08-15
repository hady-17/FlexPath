const express = require('express');
const router = express.Router();
const { addPlan, getPlans, getPlanById, updatePlan, deletePlan } = require('../controllers/planController');
const auth = require('../middleware/auth');
// @route POST /api/plans
// @desc Add a new plan
router.post('/',auth, addPlan);

// @route GET /api/plans
// @desc Get all plans
router.get('/',auth, getPlans);

// @route GET /api/plans/:id
// @desc Get a plan by ID
router.get('/:id',auth, getPlanById);

// @route PUT /api/plans/:id
// @desc Update a plan by ID
router.put('/:id',auth, updatePlan);

// @route DELETE /api/plans/:id
// @desc Delete a plan by ID
router.delete('/:id',auth, deletePlan);

module.exports = router;
