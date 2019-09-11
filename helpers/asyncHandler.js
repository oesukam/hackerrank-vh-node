const asyncHandler = callback => async (req, res, next) => {
  try {
    await callback(req, res, next);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: error.message
    });
  }
};

module.exports = asyncHandler;
