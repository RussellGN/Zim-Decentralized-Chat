import { makeTxnId } from "../common.js";
import { ILogItem } from "../../logging/types";
import { ILoginMethod } from "./LoginMethod";
import { HomeServerApi } from "../net/HomeServerApi.js";

export class TokenLoginMethod implements ILoginMethod {
   private readonly _loginToken: string;
   public readonly homeserver: string;

   constructor({ homeserver, loginToken }: { homeserver: string; loginToken: string }) {
      this.homeserver = homeserver;
      this._loginToken = loginToken;
   }

   async login(hsApi: HomeServerApi, deviceName: string, log: ILogItem): Promise<Record<string, any>> {
      return await hsApi.tokenLogin(this._loginToken, makeTxnId(), deviceName, { log }).response();
   }
}
