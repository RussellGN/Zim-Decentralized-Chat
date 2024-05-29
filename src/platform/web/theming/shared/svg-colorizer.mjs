export function getColoredSvgString(svgString, primaryColor, secondaryColor) {
   let coloredSVGCode = svgString.replaceAll("#ff00ff", primaryColor);
   coloredSVGCode = coloredSVGCode.replaceAll("#00ffff", secondaryColor);
   if (svgString === coloredSVGCode) {
      throw new Error(
         "svg-colorizer made no color replacements! The input svg should only contain colors #ff00ff (primary, case-sensitive) and #00ffff (secondary, case-sensitive)."
      );
   }
   return coloredSVGCode;
}
