import { tag } from "../general/html";

export class StaticView {
   constructor(value, render = undefined) {
      if (typeof value === "function" && !render) {
         render = value;
         value = null;
      }
      this._root = render ? render(tag, value) : this.render(tag, value);
   }

   mount() {
      return this._root;
   }

   root() {
      return this._root;
   }

   unmount() {}
   update() {}
}
