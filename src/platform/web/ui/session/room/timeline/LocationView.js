import { BaseMessageView } from "./BaseMessageView.js";

export class LocationView extends BaseMessageView {
   renderMessageBody(t, vm) {
      return t.p({ className: "Timeline_messageBody statusMessage" }, [
         t.span(vm.label),
         t.a(
            { className: "Timeline_locationLink", href: vm.mapsLink, target: "_blank", rel: "noopener" },
            vm.i18n`Open in maps`
         ),
         t.time(vm.time),
      ]);
   }
}
