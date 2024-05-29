export function mergeMap<K, V>(src: Map<K, V> | undefined, dst: Map<K, V>): void {
   if (src) {
      for (const [key, value] of src.entries()) {
         dst.set(key, value);
      }
   }
}

export function tests() {
   return {
      "mergeMap with src": (assert) => {
         const src = new Map();
         src.set(1, "a");
         const dst = new Map();
         dst.set(2, "b");
         mergeMap(src, dst);
         assert.equal(dst.get(1), "a");
         assert.equal(dst.get(2), "b");
         assert.equal(src.get(2), null);
      },
      "mergeMap without src doesn't fail": () => {
         mergeMap(undefined, new Map());
      },
   };
}
