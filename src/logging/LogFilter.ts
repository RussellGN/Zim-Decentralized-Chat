import type { ILogItem, ISerializedItem } from "./types";

export enum LogLevel {
   All = 1,
   Debug,
   Detail,
   Info,
   Warn,
   Error,
   Fatal,
   Off,
}

export class LogFilter {
   private _min?: LogLevel;
   private _parentFilter?: LogFilter;

   constructor(parentFilter?: LogFilter) {
      this._parentFilter = parentFilter;
   }

   filter(item: ILogItem, children: ISerializedItem[] | null): boolean {
      if (this._parentFilter) {
         if (!this._parentFilter.filter(item, children)) {
            return false;
         }
      }
      // neither our children or us have a loglevel high enough, filter out.
      if (this._min !== undefined && !Array.isArray(children) && item.logLevel < this._min) {
         return false;
      } else {
         return true;
      }
   }

   /* methods to build the filter */
   minLevel(logLevel: LogLevel): LogFilter {
      this._min = logLevel;
      return this;
   }
}
