import { BaseMediaTile } from "./BaseMediaTile.js";

export class ImageTile extends BaseMediaTile {
   constructor(entry, options) {
      super(entry, options);
      this._lightboxUrl = this.urlRouter.urlForSegments([
         // ensure the right room is active if in grid view
         this.navigation.segment("room", this._room.id),
         this.navigation.segment("lightbox", this._entry.id),
      ]);
   }

   get lightboxUrl() {
      if (!this.isPending) {
         return this._lightboxUrl;
      }
      return "";
   }

   get shape() {
      return "image";
   }
}
