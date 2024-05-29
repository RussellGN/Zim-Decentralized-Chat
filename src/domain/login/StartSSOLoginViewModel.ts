import type { SSOLoginHelper } from "../../matrix/login";
import { Options as BaseOptions, ViewModel } from "../ViewModel";
import type { LoginOptions } from "./LoginViewModel";

type Options = {
   loginOptions: LoginOptions | undefined;
} & BaseOptions;

export class StartSSOLoginViewModel extends ViewModel {
   private _sso?: SSOLoginHelper;
   private _isBusy = false;

   constructor(options: Options) {
      super(options);
      this._sso = options.loginOptions!.sso;
      this._isBusy = false;
   }

   get isBusy(): boolean {
      return this._isBusy;
   }

   setBusy(status: boolean): void {
      this._isBusy = status;
      this.emitChange("isBusy");
   }

   async startSSOLogin(): Promise<void> {
      await this.platform.settingsStorage.setString("sso_ongoing_login_homeserver", this._sso!.homeserver);
      const link = this._sso!.createSSORedirectURL(this.urlRouter.createSSOCallbackURL());
      this.platform.openUrl(link);
   }
}
