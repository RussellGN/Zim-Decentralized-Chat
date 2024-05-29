import { LazyListView } from "../../general/LazyListView";
import { MemberTileView } from "./MemberTileView.js";
import { TemplateView } from "../../general/TemplateView";

export class MemberListView extends TemplateView {
   render(t, vm) {
      const list = new LazyListView(
         {
            list: vm.memberTileViewModels,
            className: "MemberListView__list",
            itemHeight: 40,
         },
         (tileViewModel) => new MemberTileView(tileViewModel)
      );
      return t.div({ className: "MemberListView" }, [
         t.div({ className: "MemberListView__invite-container" }, [
            t.button(
               {
                  className: "MemberListView__invite-btn button-action primary",
                  onClick: () => vm.openInvitePanel(),
               },
               vm.i18n`Invite to this room`
            ),
         ]),
         t.view(list),
      ]);
   }
}
