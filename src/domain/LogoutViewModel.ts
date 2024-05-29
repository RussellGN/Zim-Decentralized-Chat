import { Options as BaseOptions, ViewModel } from "./ViewModel";
import { Client } from "../matrix/Client.js";
import { SegmentType } from "./navigation/index";

type Options = { sessionId: string } & BaseOptions;

export class LogoutViewModel extends ViewModel<SegmentType, Options> {
   private _sessionId: string;
   private _busy: boolean;
   private _showConfirm: boolean;
   private _error?: Error;

   constructor(options: Options) {
      super(options);
      this._sessionId = options.sessionId;
      this._busy = false;
      this._showConfirm = true;
      this._error = undefined;
   }

   get showConfirm(): boolean {
      return this._showConfirm;
   }

   get busy(): boolean {
      return this._busy;
   }

   get cancelUrl(): string | undefined {
      return this.urlRouter.urlForSegment("session", true);
   }

   async logout(): Promise<void> {
      this._busy = true;
      this._showConfirm = false;
      this.emitChange("busy");
      try {
         const client = new Client(this.platform);
         await client.startLogout(this._sessionId);
         this.navigation.push("session", true);
      } catch (err) {
         this._error = err;
         this._busy = false;
         this.emitChange("busy");
      }
   }

   get status(): string {
      if (this._error) {
         return this.i18n`Could not log out of device: ${this._error.message}`;
      } else {
         return this.i18n`Logging out… Please don't close the app.`;
      }
   }
}
