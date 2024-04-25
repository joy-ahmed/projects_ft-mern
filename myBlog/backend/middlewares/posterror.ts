// Error handling middleware
export const errorHandler = (err, req, res, next) => {
  const message = err.message || "Something went wrong";
  const stack = err.stack;
  res.status(500).json({ message, stack }); // Send a generic error response
};

// Other middleware and route handlers...
