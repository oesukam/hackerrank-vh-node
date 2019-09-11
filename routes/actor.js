const { Router } = require('express');
const router = Router();
const controller = require('../controllers/actors');
const joiValidator = require('../middlewares/joiValidator');
const joiRules = require('./validatorRules/actors');
const asyncHandler = require('../helpers/asyncHandler');

// Routes related to actor.

router
  .route('/')
  .get(controller.getAllActors)
  .put(
    joiValidator({ schema: joiRules.updateActor }),
    asyncHandler(controller.updateActor)
  );

router.get('/streak', controller.getStreak);

module.exports = router;
