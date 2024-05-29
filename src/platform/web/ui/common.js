let container;

export function spinner(t, extraClasses = undefined) {
   if (container === undefined) {
      container = document.querySelector(".hydrogen");
   }
   const classes = Object.assign({ spinner: true }, extraClasses);
   if (container?.classList.contains("legacy")) {
      return t.div({ className: classes }, [t.div(), t.div(), t.div(), t.div()]);
   } else {
      return t.svg(
         { className: classes, viewBox: "0 0 100 100" },
         t.circle({ cx: "50%", cy: "50%", r: "45%", pathLength: "100" })
      );
   }
}
