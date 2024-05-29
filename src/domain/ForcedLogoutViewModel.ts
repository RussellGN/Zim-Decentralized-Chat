import { Options as BaseOptions, ViewModel } from "./ViewModel";
import { Client } from "../matrix/Client.js";
import { SegmentType } from "./navigation/index";

type Options = { sessionId: string } & BaseOptions;

export class ForcedLogoutViewModel extends ViewModel<SegmentType, Options> {
   private _sessionId: string;
   private _error?: Error;
   private _logoutPromise: Promise<void>;
   private _showStatus: boolean = false;
   private _showSpinner: boolean = false;

   constructor(options: Options) {
      super(options);
      this._sessionId = options.sessionId;
      // Start the logout process immediately without any user interaction
      this._logoutPromise = this.forceLogout();
   }

   async forceLogout(): Promise<void> {
      try {
         const client = new Client(this.platform);
         await client.startForcedLogout(this._sessionId);
      } catch (err) {
         this._error = err;
         // Show the error in the UI
         this._showSpinner = false;
         this._showStatus = true;
         this.emitChange("error");
      }
   }

   async proceed(): Promise<void> {
      /**
       * The logout should already be completed because we started it from the ctor.
       * In case the logout is still proceeding, we will show a message with a spinner.
       */
      this._showSpinner = true;
      this._showStatus = true;
      this.emitChange("showStatus");
      await this._logoutPromise;
      // At this point, the logout is completed for sure.
      if (!this._error) {
         this.navigation.push("login", true);
      }
   }

   get status(): string {
      if (this._error) {
         return this.i18n`Could not log out of device: ${this._error.message}`;
      } else {
         return this.i18n`Logging out… Please don't close the app.`;
      }
   }

   get showStatus(): boolean {
      return this._showStatus;
   }

   get showSpinner(): boolean {
      return this._showSpinner;
   }
}
