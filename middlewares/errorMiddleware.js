const errorHandler = (err, req, res, next) => {
  console.error("Error:", err);

  // Default error response
  let statusCode = 500;
  let message = "Internal server error";

  // Mongoose validation error
  if (err.name === "ValidationError") {
    statusCode = 400;
    message = err.message;
  }

  // Mongoose CastError (invalid ObjectId)
  if (err.name === "CastError") {
    statusCode = 400;
    message = "Invalid ID";
  }

  res.status(statusCode).json({ error: message });
};

export default errorHandler;
