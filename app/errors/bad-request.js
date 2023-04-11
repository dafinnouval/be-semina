const { StatusCodes } = require("http-status-codes");
// import custom-api
const CustomAPIError = require("./custom-api-error");

class BadRequest extends CustomAPIError {
  constructor(message) {
    super(message);
    // Memberikan statusCode bad request
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

module.exports = BadRequest;
