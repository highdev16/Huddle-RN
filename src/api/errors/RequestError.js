export default class RequestError extends Error {
  constructor(status, message) {
    super(message);

    this.name = 'RequestError';
    this.status = status;
  }
}
