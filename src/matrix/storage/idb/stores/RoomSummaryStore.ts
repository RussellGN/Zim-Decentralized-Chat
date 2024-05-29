/**
store contains:
	roomId
	name
	lastMessage
	unreadCount
	mentionCount
	isEncrypted
	isDirectMessage
	membership
	inviteCount
	joinCount
*/
import { Store } from "../Store";
import { SummaryData } from "../../../room/RoomSummary";

/** Used for both roomSummary and archivedRoomSummary stores */
export class RoomSummaryStore {
   private _summaryStore: Store<SummaryData>;

   constructor(summaryStore: Store<SummaryData>) {
      this._summaryStore = summaryStore;
   }

   getAll(): Promise<SummaryData[]> {
      return this._summaryStore.selectAll();
   }

   set(summary: SummaryData): void {
      this._summaryStore.put(summary);
   }

   get(roomId: string): Promise<SummaryData | null> {
      return this._summaryStore.get(roomId);
   }

   async has(roomId: string): Promise<boolean> {
      const fetchedKey = await this._summaryStore.getKey(roomId);
      return roomId === fetchedKey;
   }

   remove(roomId: string): void {
      this._summaryStore.delete(roomId);
   }
}
