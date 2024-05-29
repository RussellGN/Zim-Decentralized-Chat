export class ListObserver {
   constructor() {
      this._queue = [];
      this._backlog = [];
   }

   next() {
      if (this._backlog.length) {
         return Promise.resolve(this._backlog.shift());
      } else {
         return new Promise((resolve) => {
            this._queue.push(resolve);
         });
      }
   }

   _fullfillNext(value) {
      if (this._queue.length) {
         const resolve = this._queue.shift();
         resolve(value);
      } else {
         this._backlog.push(value);
      }
   }

   onReset() {
      this._fullfillNext({ type: "reset" });
   }

   onAdd(index, value) {
      this._fullfillNext({ type: "add", index, value });
   }

   onUpdate(index, value, params) {
      this._fullfillNext({ type: "update", index, value, params });
   }

   onRemove(index, value) {
      this._fullfillNext({ type: "remove", index, value });
   }

   onMove(fromIdx, toIdx, value) {
      this._fullfillNext({ type: "move", fromIdx, toIdx, value });
   }
}
