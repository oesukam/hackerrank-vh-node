const { Router } = require('express');
const router = Router();
const { eraseEvents } = require('../controllers/events');
const asyncHandler = require('../helpers/asyncHandler');
// Route related to delete events

router.delete('/', asyncHandler(eraseEvents));

module.exports = router;
