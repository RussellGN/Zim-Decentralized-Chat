export class UpdateAction {
   constructor(remove, update, replace, updateParams) {
      this._remove = remove;
      this._update = update;
      this._replace = replace;
      this._updateParams = updateParams;
   }

   get shouldReplace() {
      return this._replace;
   }

   get shouldRemove() {
      return this._remove;
   }

   get shouldUpdate() {
      return this._update;
   }

   get updateParams() {
      return this._updateParams;
   }

   static Remove() {
      return new UpdateAction(true, false, false, null);
   }

   static Update(newParams) {
      return new UpdateAction(false, true, false, newParams);
   }

   static Nothing() {
      return new UpdateAction(false, false, false, null);
   }

   static Replace(params) {
      return new UpdateAction(false, false, true, params);
   }
}
