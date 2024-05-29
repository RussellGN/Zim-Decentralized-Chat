import { BaseMessageView } from "./BaseMessageView.js";

export class FileView extends BaseMessageView {
   renderMessageBody(t, vm) {
      const children = [];
      if (vm.isPending) {
         children.push((vm) => vm.label);
      } else {
         children.push(
            t.button({ className: "link", onClick: () => vm.download() }, (vm) => vm.label),
            t.time(vm.time)
         );
      }
      return t.p({ className: "Timeline_messageBody statusMessage" }, children);
   }
}
