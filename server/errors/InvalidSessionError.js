export class InvalidSessionError extends Error {
  constructor(sessionId) {
    super(`The session ${sessionId} is invalid`);
    this.sessionId = sessionId;
  }
}
