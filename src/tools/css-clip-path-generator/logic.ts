export type ClipShape = "triangle" | "rhombus" | "pentagon" | "hexagon" | "star" | "circle" | "ellipse" | "arrow-right" | "chevron-right" | "octagon";

export const SHAPES: Record<ClipShape, string> = {
  triangle: "polygon(50% 0%, 0% 100%, 100% 100%)",
  rhombus: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
  pentagon: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
  hexagon: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
  star: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)",
  circle: "circle(50% at 50% 50%)",
  ellipse: "ellipse(50% 35% at 50% 50%)",
  "arrow-right": "polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)",
  "chevron-right": "polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)",
  octagon: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
};

/** Return the CSS for the chosen clip-path shape. */
export function buildClipPathCss(shape: ClipShape): string {
  return `clip-path: ${SHAPES[shape]};`;
}
