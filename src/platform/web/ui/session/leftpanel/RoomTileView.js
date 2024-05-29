import { TemplateView } from "../../general/TemplateView";
import { AvatarView } from "../../AvatarView.js";
import { spinner } from "../../common.js";

export class RoomTileView extends TemplateView {
   render(t, vm) {
      const classes = {
         active: (vm) => vm.isOpen,
         hidden: (vm) => vm.hidden,
      };
      return t.li({ className: classes }, [
         t.a({ href: vm.url }, [
            t.view(new AvatarView(vm, 32), { parentProvidesUpdates: true }),
            t.div({ className: "description" }, [
               t.div({ className: { name: true, unread: (vm) => vm.isUnread } }, (vm) => vm.name),
               t.map(
                  (vm) => vm.busy,
                  (busy) => {
                     if (busy) {
                        return spinner(t);
                     } else {
                        return t.div(
                           {
                              className: {
                                 badge: true,
                                 highlighted: (vm) => vm.isHighlighted,
                                 hidden: (vm) => !vm.badgeCount,
                              },
                           },
                           (vm) => vm.badgeCount
                        );
                     }
                  }
               ),
            ]),
         ]),
      ]);
   }

   update(value, props) {
      super.update(value);
      // update the AvatarView as we told it to not subscribe itself with parentProvidesUpdates
      this.updateSubViews(value, props);
   }
}
