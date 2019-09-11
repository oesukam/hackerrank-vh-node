const Joi = require('@hapi/joi');

const joiValidator = ({ schema } = {}) => async (req, res, next) => {
  const { body } = req;
  try {
    await Joi.validate(body, schema);
    return next();
  } catch (error) {
    return res.status(400).json({
      status: 400,
      error: error.details[0].message
    });
  }
};

module.exports = joiValidator;
