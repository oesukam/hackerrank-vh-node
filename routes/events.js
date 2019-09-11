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

router.get(
  '/actors/:actorId',
  joiValidator({ type: 'params', schema: joiRules.getByActorParams }),
  asyncHandler(controller.getByActor)
);

module.exports = router;
