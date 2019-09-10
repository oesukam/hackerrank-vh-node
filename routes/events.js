const { Router } = require('express');
const router = Router();

const controller = require('../controllers/events');

// Routes related to event

router.route('/').get(controller.getAllEvents);

module.exports = router;
