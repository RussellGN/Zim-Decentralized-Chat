import { AbortError } from "../utils/error";

export class BaseRequest {
   constructor() {
      this._responsePromise = new Promise((resolve, reject) => {
         this.resolve = resolve;
         this.reject = reject;
      });
      this.responded = false;
      this.aborted = false;
   }

   _respond(value) {
      this.responded = true;
      this.resolve(value);
      return this;
   }

   abort() {
      this.aborted = true;
      this.reject(new AbortError());
   }

   response() {
      return this._responsePromise;
   }
}

// this is a NetworkRequest as used by HomeServerApi
export class Request extends BaseRequest {
   respond(status, body) {
      return this._respond({ status, body });
   }
}
