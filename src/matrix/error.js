export class WrappedError extends Error {
   constructor(message, cause) {
      super(`${message}: ${cause.message}`);
      this.cause = cause;
   }

   get name() {
      return "WrappedError";
   }
}

export class HomeServerError extends Error {
   constructor(method, url, body, status) {
      super(`${body ? body.error : status} on ${method} ${url}`);
      this.errcode = body ? body.errcode : null;
      this.retry_after_ms = body ? body.retry_after_ms : 0;
      this.statusCode = status;
   }

   get name() {
      return "HomeServerError";
   }
}

export { AbortError } from "../utils/error";

export class ConnectionError extends Error {
   constructor(message, isTimeout) {
      super(message || "ConnectionError");
      this.isTimeout = isTimeout;
   }

   get name() {
      return "ConnectionError";
   }
}
