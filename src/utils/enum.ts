export function createEnum(...values: string[]): Readonly<{}> {
   const obj = {};
   for (const value of values) {
      obj[value] = value;
   }
   return Object.freeze(obj);
}
