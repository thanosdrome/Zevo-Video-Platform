class ApiResponse {
  constructor(statusCode, data, message = "Sucess") {
    this.statuscode = statusCode;
    this.data = data;
    this.message = message;
    this.sucess = statusCode < 400;
  }
}

export { ApiResponse };
