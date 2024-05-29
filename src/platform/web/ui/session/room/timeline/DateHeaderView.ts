import { TemplateView } from "../../../general/TemplateView";
import type { DateTile } from "../../../../../../domain/session/room/timeline/tiles/DateTile";

export class DateHeaderView extends TemplateView<DateTile> {
   render(t, vm) {
      return t.h2({ className: "DateHeader" }, t.time({ dateTime: vm.machineReadableDate }, vm.relativeDate));
   }

   /* This is called by the parent ListView, which just has 1 listener for the whole list */
   onClick() {}
}
