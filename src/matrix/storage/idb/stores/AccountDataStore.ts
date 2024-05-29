import { Store } from "../Store";
import { Content } from "../../types";

export interface AccountDataEntry {
   type: string;
   content: Content;
}

export class AccountDataStore {
   private _store: Store<AccountDataEntry>;

   constructor(store: Store<AccountDataEntry>) {
      this._store = store;
   }

   async get(type: string): Promise<AccountDataEntry | undefined> {
      return await this._store.get(type);
   }

   set(event: AccountDataEntry): void {
      this._store.put(event);
   }

   async getAll(): Promise<ReadonlyArray<AccountDataEntry>> {
      return await this._store.selectAll();
   }
}
