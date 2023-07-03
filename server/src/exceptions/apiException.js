class ApiException extends Error {
  constructor(message, statusCode) {
    super(message);
    this.message = message;
    this.statusCode = statusCode;
  }

  static badRequest(message) {
    return new ApiException(message, 400);
  }

  static unauthorized(message) {
    return new ApiException(message, 401);
  }

  static notFound(message) {
    return new ApiException(message, 404);
  }

  static internalServerError(message) {
    return new ApiException(message, 500);
  }
}

export default ApiException;
