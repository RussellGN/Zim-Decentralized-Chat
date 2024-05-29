import { BlobHandle } from "../../platform/web/dom/BlobHandle.js";

export type RequestBody = BlobHandle | string | Map<string, string | { blob: BlobHandle; name: string }>;

export type EncodedBody = {
   mimeType: string;
   // the map gets transformed to a FormData object on the web
   body: RequestBody;
};

export function encodeQueryParams(queryParams?: object): string {
   return Object.entries(queryParams || {})
      .filter(([, value]) => value !== undefined)
      .map(([name, value]) => {
         if (typeof value === "object") {
            value = JSON.stringify(value);
         }
         return `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
      })
      .join("&");
}

export function encodeBody(body: BlobHandle | object): EncodedBody {
   if (body instanceof BlobHandle) {
      const blob = body as BlobHandle;
      return {
         mimeType: blob.mimeType,
         body: blob, // will be unwrapped in request fn
      };
   } else if (body instanceof Map) {
      return {
         mimeType: "multipart/form-data",
         body: body,
      };
   } else if (typeof body === "object") {
      const json = JSON.stringify(body);
      return {
         mimeType: "application/json",
         body: json,
      };
   } else {
      throw new Error("Unknown body type: " + body);
   }
}
