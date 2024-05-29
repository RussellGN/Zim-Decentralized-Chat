import { BaseMediaView } from "./BaseMediaView.js";

export class ImageView extends BaseMediaView {
   renderMedia(t, vm) {
      const img = t.img({
         src: (vm) => vm.thumbnailUrl,
         alt: (vm) => vm.label,
         title: (vm) => vm.label,
         style: `max-width: ${vm.width}px; max-height: ${vm.height}px;`,
      });
      return vm.isPending || !vm.lightboxUrl ? img : t.a({ href: vm.lightboxUrl }, img);
   }
}
