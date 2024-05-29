import { BaseTextTile, BodyFormat } from "./BaseTextTile.js";
import { parsePlainBody } from "../MessageBody.js";
import { parseHTMLBody } from "../deserialize.js";

export class TextTile extends BaseTextTile {
   _getContentString(key) {
      return this._getContent()?.[key] || "";
   }

   _getPlainBody() {
      return this._getContentString("body");
   }

   _getFormattedBody() {
      return this._getContentString("formatted_body");
   }

   _getBody() {
      if (this._getBodyFormat() === BodyFormat.Html) {
         return this._getFormattedBody();
      } else {
         return this._getPlainBody();
      }
   }

   _getBodyFormat() {
      if (this._getContent()?.format === "org.matrix.custom.html") {
         return BodyFormat.Html;
      } else {
         return BodyFormat.Plain;
      }
   }

   _parseBody(body, format) {
      let messageBody;
      if (format === BodyFormat.Html) {
         messageBody = parseHTMLBody(this.platform, this._mediaRepository, body);
      } else {
         messageBody = parsePlainBody(body);
      }
      if (this._getContent()?.msgtype === "m.emote") {
         messageBody.insertEmote(`* ${this.displayName} `);
      }
      return messageBody;
   }
}
