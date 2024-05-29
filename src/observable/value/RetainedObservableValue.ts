import { ObservableValue } from "./index";

export class RetainedObservableValue<T> extends ObservableValue<T> {
   constructor(initialValue: T, private freeCallback: () => void, private startCallback: () => void = () => {}) {
      super(initialValue);
   }

   onSubscribeFirst(): void {
      this.startCallback();
   }

   onUnsubscribeLast(): void {
      super.onUnsubscribeLast();
      this.freeCallback();
   }
}
