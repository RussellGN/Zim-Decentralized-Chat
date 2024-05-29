import { SimpleTile } from "./SimpleTile";

export class RoomNameTile extends SimpleTile {
   get shape() {
      return "announcement";
   }

   get announcement() {
      const content = this._entry.content;
      return `${this._entry.displayName || this._entry.sender} named the room "${content?.name}"`;
   }
}
