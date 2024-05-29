export class Direction {
   constructor(public readonly isForward: boolean) {}

   get isBackward(): boolean {
      return !this.isForward;
   }

   asApiString(): string {
      return this.isForward ? "f" : "b";
   }

   reverse(): Direction {
      return this.isForward ? Direction.Backward : Direction.Forward;
   }

   static get Forward(): Direction {
      return _forward;
   }

   static get Backward(): Direction {
      return _backward;
   }
}

const _forward = new Direction(true);
const _backward = new Direction(false);
