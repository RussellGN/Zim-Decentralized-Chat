import { TemplateView } from "../../general/TemplateView";

export class DisabledComposerView extends TemplateView {
   render(t) {
      return t.div(
         { className: "DisabledComposerView" },
         t.h3((vm) => vm.description)
      );
   }
}
