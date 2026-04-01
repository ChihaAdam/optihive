const mongooseErrorCodes = {
  11000: {
    statusCode: 409,
    message: "Resource already exists",
  },
  ValidationError: {
    statusCode: 400,
    message: "Validation error",
  },
  CastError: {
    statusCode: 400,
    message: "Invalid input",
  },
  DuplicateKeyError: {
    statusCode: 409,
    message: "Resource already exists",
  },
};
const jsonWebTokenError = {
  JsonWebTokenError: {
    statusCode: 401,
    message: "Unauthorized",
  },
};
export const errorHandler = (err, _req, res, _next) => {
  if (err.name === "MongoServerError" && mongooseErrorCodes[err.code]) {
    const { statusCode, message } = mongooseErrorCodes[err.code];
    return res.status(statusCode).json({ message });
  }
  if (err.name === "JsonWebTokenError" && jsonWebTokenError[err.name]) {
    const { statusCode, message } = jsonWebTokenError[err.name];
    return res.status(statusCode).json({ message });
  }
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal server error";
  if (statusCode === 500) console.error(err);
  res.status(statusCode).json({ message });
};
