export function hydrogenGithubLink(t) {
   if (DEFINE_VERSION && DEFINE_GLOBAL_HASH) {
      return t.a(
         { target: "_blank", href: `https://github.com/vector-im/hydrogen-web/releases/tag/v${DEFINE_VERSION}` },
         `Hydrogen v${DEFINE_VERSION} (${DEFINE_GLOBAL_HASH}) on Github`
      );
   } else {
      return t.a({ target: "_blank", href: "https://github.com/vector-im/hydrogen-web" }, "Hydrogen on Github");
   }
}
