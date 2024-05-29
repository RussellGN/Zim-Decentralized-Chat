import { TemplateView } from "../../../general/TemplateView";

export class AnnouncementView extends TemplateView {
   // ignore other arguments
   constructor(vm) {
      super(vm);
   }

   render(t, vm) {
      return t.li(
         {
            className: "AnnouncementView",
            "data-event-id": vm.eventId,
         },
         t.div((vm) => vm.announcement)
      );
   }

   /* This is called by the parent ListView, which just has 1 listener for the whole list */
   onClick() {}
}
