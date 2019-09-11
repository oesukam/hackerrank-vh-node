const { Router } = require('express');
const joiValidator = require('../middlewares/joiValidator');
const joiRules = require('./validatorRules/events');
const asyncHandler = require('../helpers/asyncHandler');

const router = Router();

const controller = require('../controllers/events');

// Routes related to event

router
  .route('/')
  .get(asyncHandler(controller.getAllEvents))
  .post(
    joiValidator({ schema: joiRules.addEvent }),
    asyncHandler(controller.addEvent)
  );

module.exports = router;
