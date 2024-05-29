import { BaseMessageView } from "./BaseMessageView.js";
import { Menu } from "../../../general/Menu.js";

export class RedactedView extends BaseMessageView {
   renderMessageBody(t) {
      return t.p({ className: "Timeline_messageBody statusMessage" }, (vm) => vm.description);
   }

   createMenuOptions(vm) {
      const options = super.createMenuOptions(vm);
      if (vm.isRedacting) {
         options.push(Menu.option(vm.i18n`Cancel`, () => vm.abortPendingRedaction()));
      }
      return options;
   }
}
