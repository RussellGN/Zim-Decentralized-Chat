import { BaseMediaTile } from "./BaseMediaTile.js";

export class VideoTile extends BaseMediaTile {
   async loadVideo() {
      const file = this._getContent().file;
      if (file && !this._decryptedFile) {
         this._decryptedFile = await this._loadEncryptedFile(file);
         this.emitChange("videoUrl");
      }
   }

   get videoUrl() {
      if (this._decryptedFile) {
         return this._decryptedFile.url;
      }
      const mxcUrl = this._getContent()?.url;
      if (typeof mxcUrl === "string") {
         return this._mediaRepository.mxcUrl(mxcUrl);
      }
      return "";
   }

   get shape() {
      return "video";
   }

   _isMainResourceImage() {
      return false;
   }
}
