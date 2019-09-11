const Joi = require('@hapi/joi');

module.exports.updateActor = Joi.object().keys({
  id: Joi.number().required(),
  login: Joi.string(),
  avatar_url: Joi.string()
});
