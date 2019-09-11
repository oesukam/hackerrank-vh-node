const Joi = require('@hapi/joi');

const joiValidator = ({ schema, type = 'body' } = {}) => async (
  req,
  res,
  next
) => {
  try {
    await Joi.validate(req[type], schema);
    return next();
  } catch (error) {
    return res.status(400).json({
      status: 400,
      error: error.details ? error.details[0].message : error.message
    });
  }
};

module.exports = joiValidator;
