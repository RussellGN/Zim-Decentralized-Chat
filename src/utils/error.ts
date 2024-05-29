export class AbortError extends Error {
   get name(): string {
      return "AbortError";
   }
}
