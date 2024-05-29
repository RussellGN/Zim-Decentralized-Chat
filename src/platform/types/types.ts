import type { RequestResult } from "../web/dom/request/fetch.js";
import type { RequestBody } from "../../matrix/net/common";

export interface IRequestOptions {
   uploadProgress?: (loadedBytes: number) => void;
   timeout?: number;
   body?: RequestBody;
   headers?: Map<string, string | number>;
   cache?: boolean;
   method?: string;
   format?: string;
}

export type RequestFunction = (url: string, options: IRequestOptions) => RequestResult;

export interface IBlobHandle {
   nativeBlob: any;
   url: string;
   size: number;
   mimeType: string;
   readAsBuffer(): BufferSource;
   dispose();
}

export type File = {
   readonly name: string;
   readonly blob: IBlobHandle;
};

export interface Timeout {
   elapsed(): Promise<void>;
   abort(): void;
   dispose(): void;
}

export type TimeoutCreator = (timeout: number) => Timeout;

export interface ITimeFormatter {
   formatTime(date: Date): string;
   formatRelativeDate(date: Date): string;
   formatMachineReadableDate(date: Date): string;
   formatDuration(milliseconds: number): string;
}
